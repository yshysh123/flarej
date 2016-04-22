var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  dependify = require('dependify'),
  watchify = require('watchify'),
  babelify = require('babelify'),
  uglify = require('gulp-uglify'),
  jasmine = require('gulp-jasmine'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  sequence = require('gulp-sequence'),
  gulpif = require('gulp-if'),
  less = require('gulp-less'),
  cssnano = require('gulp-cssnano'),
  eslint = require('gulp-eslint'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  argv = require('yargs').argv,
  glob = require('glob'),
  precompiler = require('nornj/precompiler');

function getJsLibName() {
  var libName = 'flarej.js';
  if (argv.min) {
    libName = 'flarej.min.js';
  }

  return libName;
}

function getCssLibName() {
  var libName = 'flarej.css';
  if (argv.min) {
    libName = 'flarej.min.css';
  }

  return libName;
}

function getThemeLibName(themeName) {
  var libName = 'flarej.theme.' + themeName + '.css';
  if (argv.min) {
    libName = 'flarej.theme.' + themeName + '.min.css';
  }

  return libName;
}

var b = browserify({
  entries: './src/base.js'
})
.plugin(dependify, {  //Build UMD standalone bundle and support dependencies.
  name: 'FlareJ',
  deps: {
    'nornj': 'nj',
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
})
.transform(babelify, {  //Transform es6 to es5.
  presets: ['es2015', 'stage-1', 'react'],
  plugins: [
      ['transform-class-properties', { "loose": false }],
      'transform-object-assign',
      'external-helpers',
      ['transform-es2015-classes', { "loose": true }],
      ['transform-es2015-modules-commonjs', { "loose": false }]
  ]
});

b.on('error', function (e) {
  console.log(e);
});

var isBundling = false,
  isPrecompileTmpl = true;

function bundle() {
  isBundling = true;
  var jsLibName = getJsLibName();

  //Precompile nornj templates
  if (isPrecompileTmpl) {
    precompiler({
      source: __dirname + '/src/components/**/*.nj.js',
      devMode: !argv.p
    });
  }

  return b.bundle()
    .pipe(source(jsLibName))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js').on('end', function () {
      gulp.src(['./vendor/babelHelpers.js', './dist/js/' + jsLibName])
        .pipe(concat(jsLibName))
        .pipe(gulpif(argv.min, uglify()))
        .pipe(gulp.dest('./dist/js').on('end', function () {
          isBundling = false;
        }));
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
    bundle();
    //gulp.start('build-all-js');
  });

  return bundle();
});

var isBuildingCss = false,
  isBuildingTheme = false;

gulp.task('build-css', function () {
  isBuildingCss = true;
  var cssLibName = getCssLibName();

  return gulp.src('./src/styles/base.less')
    .pipe(less())
    .pipe(rename(cssLibName))
    .pipe(gulp.dest('./dist/css').on('end', function () {
      gulp.src(['./vendor/normalize.css', './dist/css/' + cssLibName])
        .pipe(concat(cssLibName))
        .pipe(gulpif(argv.min, cssnano()))
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
      var filePath = file.substring(0, file.lastIndexOf("/")),
        themeName = filePath.substr(filePath.lastIndexOf("/") + 1),
        themeLibName = getThemeLibName(themeName);

      gulp.src(file)
        .pipe(less())
        .pipe(rename(themeLibName))
        .pipe(gulpif(argv.min, cssnano()))
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