'use strict';

const gulp    = require('gulp');
const webpack = require('webpack-stream');

gulp.task('copy', () => {
  return gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({output:{filename: 'bundle.js'}}))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['copy', 'bundle']);

gulp.task('default', ['build']);