var gulp = require('gulp');
var startServer = require('app');

gulp.task('default', function () {
    startServer;
});

gulp.task('serve', ['default']);
