'use strict';

let gulp        = require('gulp');
let util        = require('gulp-util');
let browserify  = require('browserify');
let babelify    = require('babelify');
let source      = require('vinyl-source-stream');
let buffer      = require('vinyl-buffer');
let browserSync = require('browser-sync');

gulp.task('browserify', function(){
	return browserify({
		entries: ['src/main.js'],
		debug: true
	})
	.transform(babelify, {
		"presets": [
				"es2015",
				"stage-0"
			],
		"plugins": [
			"transform-decorators-legacy"
		]
	})
	.bundle()
	.on('error', function(err) {
  	util.log(util.colors.red('Error'), err.message);
    this.emit('end');
  })
	.pipe(source('bundle.js'))
	.pipe(buffer())
	.pipe(gulp.dest('public/'))
	.pipe(browserSync.reload({stream:true, one:true}));
});
