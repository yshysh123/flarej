import gulp from 'gulp';
import babel from 'gulp-babel';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import uglify from 'gulp-uglify';
import jasmine from 'gulp-jasmine';
import template from 'gulp-template';
import sourcemaps from 'gulp-sourcemaps';
//import ignore from 'gulp-ignore';
//import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import less from 'gulp-less';
//var less2 = require('postcss-less-engine');
//const autoprefixer = require('gulp-autoprefixer');
import cssnano from 'gulp-cssnano';
import eslint from 'gulp-eslint';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
//var LessAutoprefix = require('less-plugin-autoprefix');
//var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
import autoprefixer from 'autoprefixer';
import { argv } from 'yargs';
import glob from 'glob';
import precompiler from 'nornj/precompiler';

//let ExtractTextPlugin = require('extract-text-webpack-plugin');

//let libNameSpace = 'fj';

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

//The packages need to be excluded by webpack
const webpackExternals = {
  'nornj': {
    root: 'nj',
    commonjs2: 'nornj',
    commonjs: 'nornj',
    amd: 'nornj'
  },
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDom',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};

//Handle error
function handlebuildError() {
  let args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

function precompileNj(isDev) {
  precompiler({
    source: __dirname + '/src/components/**/*.nj.js',
    exprRule: '#',
    devMode: isDev
  });
}

function concatBabelHelpers(jsLibName) {
  gulp.src(['./vendor/babelHelpers.min.js', './dist/js/' + jsLibName])
    .pipe(gulpif(argv.p, sourcemaps.init({ loadMaps: true })))
    .pipe(concat(jsLibName))
    .pipe(gulpif(argv.p, sourcemaps.write('./')))
    .pipe(gulp.dest('./dist/js'));
}

gulp.task('build-js', () => {
  precompileNj(!argv.p);

  let jsLibName = getJsLibName(),
    plugins = [
      //new webpack.DefinePlugin({
      //  G_NS: JSON.stringify(libNameSpace)
      //}),
      new webpack.NoErrorsPlugin()
    ],
    lastHash = null;

  if(argv.p) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: false,
        warnings: false
      }
    }));
  }

  return gulp.src('./src/base.js')
    .pipe(webpackStream({
      devtool: argv.p ? 'source-map' : null,
      watch: argv.w ? true : false,
      externals: webpackExternals,
      output: {
        filename: jsLibName,
        library: 'FlareJ',
        libraryTarget: 'umd'
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/,
            query: {
              plugins: ['external-helpers']
            }
          }
        ],
      },
      plugins
    }, null, function(err, stats) {
      if(argv.w && stats.hash != lastHash) {
        lastHash = stats.hash;
        concatBabelHelpers(jsLibName);
      }

      console.log(stats.toString({
        chunks: false,
        colors: true,
        //hash: false
      }));
    }))
    .on('error', handlebuildError)
    .pipe(gulp.dest('./dist/js').on('end', () => {
      if(!argv.w) {
        concatBabelHelpers(jsLibName);
      }
    }));
});

gulp.task('build-css', () => {
  let cssLibName = getCssLibName();
  //let extractLESS = new ExtractTextPlugin(cssLibName);

  //return gulp.src('./src/styles/index-all.js')
  //  .pipe(webpackStream({
  //    devtool: argv.p ? 'source-map' : null,
  //    watch: argv.w ? true : false,
  //    output: {
  //      filename: cssLibName
  //    },
  //    module: {
  //      loaders: [
  //        {
  //          test : /\.less$/,
  //          loader: ExtractTextPlugin.extract("style-loader", "css?sourceMap!less")
  //        },
  //      ],
  //    },
  //    plugins: [
  //      extractLESS
  //    ]
  //  }))
  //  .on('error', handlebuildError)
  //  .pipe(gulp.dest('./dist/css'));

  return gulp.src('./src/styles/index-all.less')
    //.pipe(template({
    //  ns: libNameSpace
    //}))
    .pipe(gulpif(argv.p, sourcemaps.init()))
    //.pipe(postcss([
    //  autoprefixer({ browsers: ['last 50 versions'] }),
    //  less2
    //], { parser: less2.parser }))
    .pipe(less())
    //  plugins: [autoprefix]
    //}))
    //.pipe(autoprefixer({ browsers: ['last 50 versions'] }))
    //.pipe(gulp.dest('./dist/css'))
    //.pipe(gulpif(argv.p, ignore.exclude('*.map')))
    //.pipe(rename(cssLibName))
    .pipe(gulpif(argv.p, cssnano()))
    .pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
    //.pipe(gulpif(argv.p, cleanCSS()))
    .pipe(rename(cssLibName))
    .pipe(gulpif(argv.p, sourcemaps.write('./', { sourceRoot: '' })))
    //.pipe(gulpif(argv.p, ignore.exclude('*.map'))) 
    //.pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
    .pipe(gulp.dest('./dist/css'));
});

//Build theme css
gulp.task('build-theme', () => {
  glob('./src/styles/theme/**/index-all.less', {}, (err, files) => {
    files.forEach((file) => {
      let filePath = file.substring(0, file.lastIndexOf("/")),
        themeName = filePath.substr(filePath.lastIndexOf("/") + 1),
        themeLibName = getThemeLibName(themeName);

      gulp.src(file)
        .pipe(gulpif(argv.p, sourcemaps.init()))
        //.pipe(template({
        //  ns: libNameSpace
        //}))
        .pipe(less())
        .pipe(gulpif(argv.p, cssnano()))
        .pipe(postcss([autoprefixer({ browsers: ['last 50 versions'] })]))
        .pipe(rename(themeLibName))
        .pipe(gulpif(argv.p, sourcemaps.write('./', { sourceRoot: themeName })))
        .pipe(gulp.dest('./dist/css/theme'));
    });
  });
});

gulp.task('build-all-css', ['build-css', 'build-theme']);

//Monitor changes of LESS files
gulp.task("watch-css", () => {
  gulp.watch('./src/styles/**/*.less', ['build-css']);
  gulp.start('build-css');
});

gulp.task("watch-theme", () => {
  gulp.watch('./src/styles/theme/**/*.less', ['build-theme']);
  gulp.start('build-theme');
});

//Copy the third party libraries
gulp.task('build-lib-css', () => {
  return gulp.src('./vendor/font-awesome/css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-lib-font', () => {
  return gulp.src('./vendor/font-awesome/fonts/*.*')
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build-all-lib', ['build-lib-css', 'build-lib-font']);
gulp.task('build', ['build-js', 'build-all-css', 'build-all-lib']);

//Convert es6 code to es5 from src to lib
gulp.task("lib", () => {
  precompileNj(false);

  //Copy style files
  gulp.src('./src/styles/**/*.less')
    .pipe(gulp.dest('./lib/styles'));

  //Convert js files
  return gulp.src(['./src/**/*.js', '!./src/components/**/*.nj.js'])
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});

//Unit testing
gulp.task("test", () => {
  return gulp.src(["./test/**/**Spec.js"])
    .pipe(jasmine());
});

//Run eslint
gulp.task('eslint', () => {
  return gulp.src(['./src/**/*.js', '!./src/**/*.tmpl.js'])
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
let defaultTasks = ['build-js', 'build-all-lib'];
if (argv.w) {
  defaultTasks.push('watch-css', 'watch-theme');
}
else {
  defaultTasks.push('build-all-css');
}
gulp.task('default', defaultTasks);