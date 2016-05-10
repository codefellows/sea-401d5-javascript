const gulp = require('gulp');
const eslint = require('gulp-eslint');


gulp.task('first_task', () => {
  console.log('TASK');
})

gulp.task('default', ['first_task', 'lint'], () => {
  console.log('SECOND TASK');
});

gulp.task('lint', () => {
  gulp.src('./greet.js')
    .pipe(eslint())
    .pipe(eslint.format())
});
