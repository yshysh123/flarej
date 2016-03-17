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
  argv = require('yargs').argv;

function getJsLibName() {
  var libName = 'flarej.js';
  if (argv.min) {
    libName = 'flarej.min.js';
  }

  return libName;
}


gulp.task('build js', function () {
  return browserify({
    entries: './src/base.js',
    standalone: 'FlareJ'
  })
    .transform(babelify, {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
          'transform-object-assign',
          'external-helpers'
      ]
    })
    .bundle()
    .pipe(source(getJsLibName()))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('concat js', function () {
  return gulp.src(['./vendor/babelHelpers.js', './dist/js/flarej.js'])
    .pipe(concat(getJsLibName()))
    .pipe(gulpif(argv.min, uglify()))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', sequence('build js', 'concat js'));

//Unit testing
gulp.task("test", function () {
  return gulp.src(["./test/**/**Spec.js"])
    .pipe(jasmine());
});

//Default task
gulp.task('default', ['build']);