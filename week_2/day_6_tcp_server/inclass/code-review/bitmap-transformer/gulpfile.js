'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default', ['runmocha', 'runlint', 'watch'], () => {
  console.log('ran mocha/chai and lint');
});

gulp.task('runlint', () => {
  gulp.src('./*.js')
  .pipe(eslint({
    'extends': 'eslint:recommended',
    "parserOptions": {
      "ecmaVersion": 6
    },
    'ecmaFeatures': {
      'modules': true
    },
    'rules': {
      'no-alert': 0,
      'no-bitwise': 0,
      'camelcase': 1,
      'no-console': 0,
      'curly': 1,
      'eqeqeq': 0,
      'no-eq-null': 0,
      'guard-for-in': 1,
      'no-empty': 1,
      'no-use-before-define': 0,
      'no-obj-calls': 2,
      'no-unused-vars': 0,
      'new-cap': 1,
      'no-shadow': 0,
      'strict': 1,
      'no-invalid-regexp': 2,
      'comma-dangle': 2,
      'no-undef': 1,
      'no-new': 1,
      'no-extra-semi': 1,
      'no-debugger': 2,
      'no-caller': 1,
      'semi': 1,
      'quotes': 0,
      'no-unreachable': 2
    },
    'globals': {
      '$': false
    },
    'env': {
      'node': true
    }
  }))
  .pipe(eslint.format());
});

gulp.task('runmocha', () => {
  return gulp.src('./test/test.js')
  .pipe(mocha());
});

gulp.task('watch', () => {
  gulp.watch('./*', ['runmocha', 'runlint']);
});
