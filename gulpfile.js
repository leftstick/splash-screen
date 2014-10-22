'use strict';

var gulp = require('gulp');

var less = function(dest, isProduction) {
    var gulp = require('gulp');
    var less = require('gulp-less');
    var prefix = require('gulp-autoprefixer');
    var rename = require('gulp-rename');
    var sourcemap = require('gulp-sourcemaps');
    return gulp.src('src/splash.less')
        .pipe(sourcemap.init())
        .pipe(rename({
            basename: isProduction ? 'splash.min' : 'splash'
        }))
        .pipe(less({
            compress: isProduction
        }))
        .pipe(sourcemap.write())
        .pipe(prefix({
            browsers: ['last 5 versions'],
            cascade: true
        }))
        .pipe(gulp.dest(dest));
};

gulp.task('lessDemo', function() {
    return less('demo/', false);
});

gulp.task('lessDist', function() {
    return less('dist/', true);
});

gulp.task('copyDemo', function() {
    return gulp.src('src/splash.js')
        .pipe(gulp.dest('demo/'));
});

gulp.task('copyDist', function() {
    return gulp.src('./src/splash.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('demo', ['lessDemo', 'copyDemo'], function() {
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


gulp.task('dist', ['lessDist', 'copyDist'], function() {
    var uglify = require('gulp-uglify');
    var sourcemaps = require('gulp-sourcemaps');
    var rename = require('gulp-rename');

    return gulp.src('./dist/splash.js')
        .pipe(sourcemaps.init())
        .pipe(rename({
            basename: 'splash.min'
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./', {
            sourceRoot: '.'
        }))
        .pipe(gulp.dest('./dist/'));
});
