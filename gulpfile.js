var gulp = require('gulp'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  uglify = require('gulp-uglify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
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
  argv = require('yargs').argv;

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

gulp.task('build-js', function () {
  return browserify({
    entries: './src/base.js',
    standalone: 'FlareJ'
  })
    .transform(babelify, {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
          'transform-object-assign',
          'external-helpers',
          ['transform-es2015-classes', { "loose": false }],
          ['transform-es2015-modules-commonjs', { "loose": false }]
      ]
    })
    .bundle()
    .pipe(source(getJsLibName()))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('concat-js', function () {
  return gulp.src(['./vendor/babelHelpers.js', './dist/js/' + getJsLibName()])
    .pipe(concat(getJsLibName()))
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-all-js', sequence('build-js', 'concat-js'));

gulp.task('build-css', function () {
  return gulp.src('./src/styles/base.less')
    .pipe(less())
    .pipe(rename(getCssLibName()))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('concat-css', function () {
  return gulp.src(['./vendor/normalize.css', './dist/css/' + getCssLibName()])
    .pipe(concat(getCssLibName()))
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

gulp.task('build-lib', ['build-lib-css', 'build-lib-font']);
gulp.task('build', ['build-all-js', 'build-all-css', 'build-lib']);

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