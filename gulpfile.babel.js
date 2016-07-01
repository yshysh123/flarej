import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import standalonify from 'standalonify';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import jasmine from 'gulp-jasmine';
import template from 'gulp-template';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import sequence from 'gulp-sequence';
import gulpif from 'gulp-if';
import less from 'gulp-less';
import cssnano from 'gulp-cssnano';
import eslint from 'gulp-eslint';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import { argv } from 'yargs';
import glob from 'glob';
import { create } from 'browser-sync';
const reload = create().reload;
import precompiler from 'nornj/precompiler';

let libNameSpace = 'fj';

function getJsLibName() {
  let libName = 'flarej.js';
  if (argv.p) {
    libName = 'flarej.min.js';
  }

  return libName;
}

function getCssLibName() {
  let libName = 'flarej.css';
  if (argv.p) {
    libName = 'flarej.min.css';
  }

  return libName;
}

function getThemeLibName(themeName) {
  let libName = 'flarej.theme.' + themeName + '.css';
  if (argv.p) {
    libName = 'flarej.theme.' + themeName + '.min.css';
  }

  return libName;
}

function precompileNj(isDev) {
  precompiler({
    source: __dirname + '/src/components/**/*.nj.js',
    exprRule: '#',
    devMode: isDev
  });
}

let b = browserify({
  entries: './src/base.js',
  //standalone: 'FlareJ'
})
.plugin(standalonify, {  //Build UMD standalone bundle and support dependencies.
  name: [libNameSpace, 'FlareJ'],
  deps: {
    'nornj': 'nj',
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
})
.transform(babelify, {  //Transform es6 to es5.
  plugins: ['external-helpers']
});

b.on('error', function (e) {
  console.log(e);
});

let isBundling = false,
  isPrecompileTmpl = true,
  isHmr = false;

function bundle() {
  isBundling = true;
  let jsLibName = getJsLibName();

  //Precompile nornj templates
  if (isPrecompileTmpl) {
    precompileNj(!argv.p);
  }

  return b.bundle()
    .on('error', function() {
      let args = Array.prototype.slice.call(arguments);
    
      //Send error to notification center with gulp-notify
      notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
      }).apply(this, args);
    
      //Keep gulp from hanging on this task
      this.emit('end');
    })
    .pipe(source(jsLibName))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js').on('end', function () {
      gulp.src(['./vendor/babelHelpers.js', './dist/js/' + jsLibName])
        .pipe(concat(jsLibName))
        .pipe(gulpif(argv.p, uglify()))
        .pipe(gulp.dest('./dist/js').on('end', function () {
          isBundling = false;
        }))
        .pipe(gulpif(isHmr, reload({stream: true})));
    }));
}

gulp.task('build-all-js', bundle);

//Monitor changes of JS files to bundle again
gulp.task('watch-js', function () {
  b.plugin(watchify);

  b.on('update', function (ids) {
    if (isBundling) {
      return;
    }

    ids.forEach(function (v) {
      console.log('bundle changed file:' + v);
    });

    isPrecompileTmpl = false;
    //bundle();
    gulp.start('build-all-js');
  });

  return bundle();
});

gulp.task('hmr', function () {
  browserSync.init({
    ghostMode: false,
    server: "./"
  });

  isHmr = true;
  gulp.start('watch-js');
});

let isBuildingCss = false,
  isBuildingTheme = false;

gulp.task('build-css', function () {
  isBuildingCss = true;
  let cssLibName = getCssLibName();

  return gulp.src('./src/styles/base.less')
    .pipe(template({
      ns: libNameSpace
    }))
    .pipe(less())
    .pipe(rename(cssLibName))
    .pipe(gulp.dest('./dist/css').on('end', function () {
      gulp.src(['./vendor/normalize.css', './dist/css/' + cssLibName])
        .pipe(concat(cssLibName))
        .pipe(gulpif(argv.p, cssnano()))
        .pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
        .pipe(gulp.dest('./dist/css').on('end', function () {
          isBuildingCss = false;
        }));
    }));
});

//Build theme css
gulp.task('build-theme', function () {
  glob('./src/styles/theme/**/base.less', {}, function (err, files) {
    files.forEach(function (file) {
      isBuildingTheme = true;
      let filePath = file.substring(0, file.lastIndexOf("/")),
        themeName = filePath.substr(filePath.lastIndexOf("/") + 1),
        themeLibName = getThemeLibName(themeName);

      gulp.src(file)
        .pipe(template({
          ns: libNameSpace
        }))
        .pipe(less())
        .pipe(rename(themeLibName))
        .pipe(gulpif(argv.p, cssnano()))
        .pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
        .pipe(gulp.dest('./dist/css/theme').on('end', function () {
          isBuildingTheme = false;
        }));
    });
  });
});

gulp.task('build-all-css', ['build-css', 'build-theme']);

//Monitor changes of LESS files
gulp.task("watch-css", function () {
  if (isBuildingCss) {
    return;
  }

  gulp.watch('./src/styles/**/*.less', ['build-css']);
});

gulp.task("watch-theme", function () {
  if (isBuildingTheme) {
    return;
  }

  gulp.watch('./src/styles/theme/**/*.less', ['build-theme']);
});

//Copy the third party libraries
gulp.task('build-lib-css', function () {
  return gulp.src('./vendor/font-awesome/css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-lib-font', function () {
  return gulp.src('./vendor/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build-all-lib', ['build-lib-css', 'build-lib-font']);
gulp.task('build', ['build-all-js', 'build-all-css', 'build-all-lib']);

//Convert es6 code to es5 from src to lib
gulp.task("lib", function () {
  precompileNj(false);

  return gulp.src(['./src/**/*.js', '!./src/components/**/*.nj.js'])
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});

//Unit testing
gulp.task("test", function () {
  return gulp.src(["./test/**/**Spec.js"])
    .pipe(jasmine());
});

//Run eslint
gulp.task('eslint', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint({
      "rules": {
        "camelcase": [2, { "properties": "always" }],
        "comma-dangle": [2, "never"],
        "semi": [2, "always"],
        "quotes": [2, "single"],
        "strict": [2, "global"]
      },
      "parser": "babel-eslint"
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

//Default task
gulp.task('default', ['build']);