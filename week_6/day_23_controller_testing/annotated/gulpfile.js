const gulp    = require('gulp');
const del     = require('del');
const webpack = require('webpack-stream');
const Server  = require('karma').Server;

const paths = {
  html: './app/index.html',
  js: './app/js/index.js',
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

//this task should bundle up your karma tests and put the bundle back in
//your test directory. Karma runs tests in the browser (or a simulator)
//which means it doesn't have access to node globals like require. To use
//them we have to run the tests through webpack.
gulp.task('bundle:test', () => {
  return gulp.src(paths.tests)
    .pipe(webpack({output:{filename: 'test_bundle.js'}}))
    .pipe(gulp.dest('./test'));
});

//In order to get karma running in gulp you just need karma itself to
//start a server. There's no package necessary.
gulp.task('karma', ['bundle:test'], (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

gulp.task('build', ['bundle', 'clean', 'copy']);

gulp.task('test:client', ['bundle:test', 'karma']);
