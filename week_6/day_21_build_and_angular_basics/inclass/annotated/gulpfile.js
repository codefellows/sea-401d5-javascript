const gulp = require('gulp');
const webpack = require('webpack-stream');

const paths = {
  js: './app/js/index.js',
  html: './app/index.html'
};

gulp.task('bundle', () => {
  //you have to return streams to run them asynchronously
  return gulp.src(paths.js)
    //webpack-stream takes a function which takes an options object
    //as an argument. In this options object you can set things like
    //where it's coming from and where it's going to. Gulp takes care
    //of most of that with src and dest so you just have to tell it 
    //what to call it.
    .pipe(webpack({output: {filename: 'bundle.js'}}))
    //send it to your build directory
    .pipe(gulp.dest('build'));
});

gulp.task('copy', () => {
  //all you need to copy over a file is to turn it into a stream and
  //tell it where to go.
  return gulp.src(paths.html)
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['bundle', 'copy']);
