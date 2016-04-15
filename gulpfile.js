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
  presets: ['es2015', 'stage-0', 'react'],
  plugins: [
      'transform-object-assign',
      'external-helpers',
      ['transform-es2015-classes', { "loose": false }],
      ['transform-es2015-modules-commonjs', { "loose": false }]
  ]
});

var isBundling = false;

function bundle() {
  isBundling = true;
  var jsLibName = getJsLibName();

  //Precompile nornj templates
  precompiler({ source: __dirname + '/src/components/**/*.nj.js', esVersion: 'es6' });

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

    var bundleJs = true;
    ids.every(function (v) {
      var fileName = v.substr(v.lastIndexOf('\\') + 1);
      if(fileName === 'template.js') {
        bundleJs = false;
        return false;
      }

      console.log('bundle changed file:' + v);
      return true;
    });

    if(bundleJs) {
      gulp.start('build-all-js');
    }
  });

  return bundle();
});

gulp.task('build-css', function () {
  return gulp.src('./src/styles/base.less')
    .pipe(less())
    .pipe(rename(getCssLibName()))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('concat-css', function () {
  var cssLibName = getCssLibName();
  return gulp.src(['./vendor/normalize.css', './dist/css/' + cssLibName])
    .pipe(concat(cssLibName))
    .pipe(gulpif(argv.min, cssnano()))
    .pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-all-css', sequence('build-css', 'concat-css'));

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