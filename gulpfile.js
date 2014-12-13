var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var es = require('event-stream');
var connect = require('gulp-connect');

gulp.task('build', [], function() {
	return es.merge(
			gulp.src('src/**/*.js'),
			gulp.src('src/**/*.html')
			.pipe(templateCache('breizh-emeraude' + '.tpl.js', {
				root: '',
				module: 'breizh-emeraude',
				standalone: false
			}))
		)
		.pipe(concat('breizh-emeraude.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['build', 'watch'], function() {
	connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('reload', ['build'], function() {
	gulp.src(['./index.html','./build/eternal-conflict.js']).pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./index.html', './src/**/*'], ['reload']);
});