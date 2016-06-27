const gulp = require('gulp');
const del = require('del');
const webpack = require('webpack-stream');

const paths = {
  html: './app/**/*.html',
  js: './app/js/client.js',
  tests: './test/controller_test.js'
};

gulp.task('bundle', ['clean'], () => {
  return gulp.src(paths.js)
    .pipe(webpack({output:{filename: 'bundle.js'}}))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', () => {
  return del('./build/**/*');
});

gulp.task('copy', ['clean'],() => {
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('bundle:test', () => {
  return gulp.src(paths.tests)
    .pipe(webpack({output:{filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

gulp.task('default', ['bundle', 'clean', 'copy']);
