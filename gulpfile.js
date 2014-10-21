'use strict';

var gulp = require('gulp');

var less = function(dest, isProduction) {
    var gulp = require('gulp');
    var less = require('gulp-less');
    var prefix = require('gulp-autoprefixer');
    var sourcemap = require('gulp-sourcemaps');
    return gulp.src('src/splash.less')
        .pipe(sourcemap.init())
        .pipe(less({
            compress: true
        }))
        .pipe(sourcemap.write())
        .pipe(prefix({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest(dest));
};

gulp.task('lessdemo', function() {
    return less('demo/', false);
});

gulp.task('demo', ['lessdemo'], function() {
    var webserver = require('gulp-webserver');
    gulp.src('demo/')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8080,
            livereload: true,
            directoryListing: false,
            fallback: 'index.html'
        }));
});
