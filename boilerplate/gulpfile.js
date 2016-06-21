'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');

var paths = {
  dev: {
    css: 'app/css/**/*.css',
    html: 'app/**/*.html',
    js: 'app/js/**/*.js',
    test: 'test/*_test.js'
  },
  build: {
    main: 'build/',
    css: 'build/css',
    js: 'build/js',
    test: 'test/'
  }
};

gulp.task('watch', function () {
  gulp.watch(paths.dev.html, ['statichtmlfiles:dev']);
  gulp.watch(paths.dev.js, ['bundle']);
  gulp.watch(paths.dev.css, ['staticcssfiles:dev']);
  gulp.watch(paths.dev.test, ['bundle:test']);
});

gulp.task('statichtmlfiles:dev', () => {
  return gulp.src(paths.dev.html)
    .pipe(gulp.dest(paths.build.main));
});

gulp.task('staticcssfiles:dev', () => {
  return gulp.src(paths.dev.css)
    .pipe(gulp.dest(paths.build.main));
});


gulp.task('bundle', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(paths.build.main));
});

gulp.task('bundle:test', () => {
  return gulp.src(paths.dev.test)
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
    .pipe(webpack({
      output: {
        filename: 'test_bundle.js'
      }
    }))
    .pipe(gulp.dest(paths.build.test));
});

gulp.task('default', ['bundle', 'statichtmlfiles:dev', 'staticcssfiles:dev']);
