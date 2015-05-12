var gulp = require('gulp'),
    compass = require('gulp-compass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon');

var sassSrc = './src/styles/sass/*.sass',
    sassDir = './src/styles/sass';

gulp.task('default', function () {
    console.log('Hi Here is gulp default');
});

gulp.task('compass',function(){
    gulp.src(sassSrc)
	.pipe(compass({
	    css: './public/css',
	    sass: sassDir
        }))
});

gulp.task('watch', function () {
  gulp.watch(sassSrc, ['compass']); 
});

gulp.task('nodemon', function (cb) {
    return nodemon({
        script: 'app.js',
        ignore: [
            './public/components/**', // bower components
            './node_modules/**',
        ]
    }).on('start', function () {
        cb();
    });
});

gulp.task('serve', ['default', 'nodemon', 'watch'], function() {
    browserSync({
        proxy: "http://localhost:3000",
        port: 7000,
    });
    gulp.watch([
        'views/**/*.tpl', 
        'public/css/*.css', 
        'public/js/*.js'])
    .on('change', reload);
});

