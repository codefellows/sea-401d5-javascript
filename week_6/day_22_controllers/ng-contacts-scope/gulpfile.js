var gulp = require('gulp');
var webpack = require('webpack-stream');


gulp.task('webpack:dev', function() {
  return gulp.src('./app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});


gulp.task('staticfiles:dev', function() {
  return gulp.src('./app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('staticcssfiles:dev', function() {
  return gulp.src('./app/css/*.css')
  .pipe(gulp.dest('build/'));
});



gulp.task('build:dev', ['staticfiles:dev','staticcssfiles:dev', 'webpack:dev']);
gulp.task('default', ['build:dev']);
