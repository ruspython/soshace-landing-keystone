var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	obfuscate = require('gulp-obfuscate'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	minifyCss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch'),
	shell = require('gulp-shell'),
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
			'node_modules/gmaps/gmaps.js',
			'node_modules/slick-carousel/slick/slick.js',
			'node_modules/tapjs/dist/tap.js',
			'public/js/navigation.js',
			'public/js/smoothscroll.js',
			'public/js/portfoliomodal.js',
			'public/js/teammodal.js',
			'public/js/sliders.js',
      'public/js/swiper.jquery.js',
			'public/js/memberinfo.js',
			'public/js/map.js',
			'public/js/lang.js',
			'public/js/contact.js',
			'public/js/footer.js',
		])
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});

//task for SASS to CSS
gulp.task('build-css', function () {
	gulp.src('public/sass/style.scss')
		.pipe(sass())
		.pipe(cmq())
		//.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
		.pipe(minifyCss())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('./dist/css'));
});

// gulp watcher for SASS
gulp.task('build-css:watch', function () {
	gulp.watch('public/sass/**/*.scss', ['build-css']);
});

gulp.task('copy:images', function () {
	gulp
		.src([
			'public/images/**/*'
		])
		.pipe(gulp.dest('dist/images'));
});

gulp.task('copy:video', function () {
	gulp
		.src([
			'public/video/**/*'
		])
		.pipe(gulp.dest('dist/video'));
});

gulp.task('copy:js', function () {
	gulp
		.src([
			'public/js/**/*'
		])
		.pipe(gulp.dest('dist/js'));
});

gulp.task('copy:fonts', function () {
	gulp
		.src([
			'public/fonts/**/*',
			'public/libs/materialize/font/**/*'
		])
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy:favicon', function () {
	gulp
		.src([
			'public/favicon.*'
		])
		.pipe(gulp.dest('dist'));
});

gulp.task('copy:libs', function () {
	gulp
		.src([
			'public/libs/**/*'
		])
		.pipe(gulp.dest('dist/libs'));
});

gulp.task('copy:ajaxgif', function () {
	gulp
		.src([
			'node_modules/slick-carousel/slick/ajax-loader.gif'
		])
		.pipe(gulp.dest('dist/css'));
});

gulp.task('copy', ['copy:images', 'copy:favicon', 'copy:ajaxgif', 'copy:video']);

gulp.task('prod', ['build-js', 'build-css', 'copy']);
gulp.task('dev', ['copy']);
//gulp.task('default', ['watch', 'runKeystone']);
