'use strict';
const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('copy', () => {
  return gulp.src(__dirname + '/app/index.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('bundle', () => {
  return gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('default', ['bundle', 'copy']);
