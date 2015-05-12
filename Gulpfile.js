var gulp = require('gulp'),
    compass = require('gulp-compass');


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

gulp.task('serve',['default','watch']);
