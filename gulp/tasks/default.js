'use strict';

let gulp = require('gulp');

gulp.task('default', ['serve'], function(){
  gulp.watch('./src/**/*.js', ['browserify']);
});
