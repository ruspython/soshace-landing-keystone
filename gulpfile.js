var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	obfuscate = require('gulp-obfuscate'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch'),
	shell = require('gulp-shell')
	sass = require('gulp-sass'),
	cmq = require('gulp-combine-mq'),
	postcss = require('postcss'),
	autoprefixer = require('autoprefixer');


var paths = {
	'src': ['./models/**/*.js', './routes/**/*.js', 'keystone.js', 'package.json']

};

// gulp lint
gulp.task('lint', function () {
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.src(paths.src)
		.pipe(watch())
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

	'watch:lint'
]);

gulp.task('build-js', function () {
	return gulp
		.src([
			'public/js/jquery.easing.1.3.js',
			'public/js/detectmobilebrowser.js',
			'public/js/isotope.pkgd.min.js',
			'public/js/wow.min.js',
			'public/js/waypoints.js',
			'public/js/jquery.counterup.min.js',
			'public/js/jquery.nicescroll.min.js',
			'public/js/gmaps.js',
			'public/libs/owl-carousel/owl.carousel.min.js',
			'public/libs/materialize/js/materialize.min.js',
			'public/libs/jwplayer/jwplayer.js',
			'public/libs/sweetalert/sweet-alert.min.js',
			'public/js/common.js',
			'public/js/main.js'
		])
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

// gulp.task('build-css', function () {
// 	gulp
// 		.src([
// 			'public/css/normalize.css',
// 			'public/fonts/font-awesome/css/font-awesome.min.css',
// 			'public/libs/materialize/css/materialize.min.css',
// 			'public/css/bootstrap.css',
// 			'public/css/animate.min.css',
// 			'public/libs/sweetalert/sweet-alert.css',
// 			'public/libs/owl-carousel/owl.carousel.css',
// 			'public/libs/owl-carousel/owl.transitions.css',
// 			'public/libs/owl-carousel/owl.theme.css',
// 			'public/css/main.css',
// 			'public/css/responsive.css',
// 			'public/css/colors/color1.css'
// 		])
// 		.pipe(concat('styles.min.css'))
// 		.pipe(minifyCss({keepBreaks: false}))
// 		.pipe(gulp.dest('./dist/css/'))
// });

//task for SASS to CSS
gulp.task('build-css', function () {
	gulp.src('public/sass/style.scss')
		.pipe(sass())
		.pipe(cmq())
		//.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('.dist/css'))
		.pipe(minifyCss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('.dist/css'));
});

gulp.task('copy:images', function () {
	gulp
		.src([
			'public/images/**/*'
		])
		.pipe(gulp.dest('dist/images'))
});

gulp.task('copy:css', function () {
	gulp
		.src([
			'public/css/**/*'
		])
		.pipe(gulp.dest('dist/css'))
});

gulp.task('copy:js', function () {
	gulp
		.src([
			'public/js/**/*'
		])
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copy:fonts', function () {
	gulp
		.src([
			'public/fonts/**/*',
			'public/libs/materialize/font/**/*'
		])
		.pipe(gulp.dest('dist/fonts'))
});

gulp.task('copy:favicon', function () {
	gulp
		.src([
			'public/favicon.*'
		])
		.pipe(gulp.dest('dist'))
});

gulp.task('copy:libs', function () {
	gulp
		.src([
			'public/libs/**/*'
		])
		.pipe(gulp.dest('dist/libs'))
});

gulp.task('copy', ['copy:images', 'copy:fonts', 'copy:favicon', 'copy:css', 'copy:js', 'copy:libs']);

gulp.task('prod', ['build-js', 'build-css', 'copy']);
gulp.task('dev', ['copy']);
//gulp.task('default', ['watch', 'runKeystone']);
