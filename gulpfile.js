var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var es = require('event-stream');
var connect = require('gulp-connect');
var usemin = require('gulp-usemin');
var clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(['./src/breizh-emeraude.js'], {
			read: false
		})
		.pipe(clean());
});

gulp.task('build', ['clean'], function() {
	return es.merge(
			gulp.src('src/**/*.js'),
			gulp.src('src/**/*.html')
			.pipe(templateCache('breizh-emeraude' + '.tpl.js', {
				root: '',
				module: 'breizh-emeraude',
				standalone: false
			}))
		)
		.pipe(concat('src/breizh-emeraude.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('index',['build'],function(){
	return 	gulp.src('src/index.html')
			.pipe(usemin({
				css: [/*minifyCss(),*/ 'concat'],
				html: [ /*minifyHtml({empty: true})*/ ],
				js: [ /*uglify(),rev()*/ ]
			})).pipe(gulp.dest('.'));
});

gulp.task('default', ['index', 'watch'], function() {
	connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('reload', ['index'], function() {
	gulp.src(['./index.html','./build/eternal-conflict.js']).pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['./index.html', './src/**/*'], ['reload']);
});