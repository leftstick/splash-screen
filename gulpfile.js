 'use strict';

 var gulp = require('gulp');

 var less = function(dest, isProduction) {
     var gulp = require('gulp');
     var less = require('gulp-less');
     var LessPluginAutoPrefix = require('less-plugin-autoprefix');
     var LessPluginCleanCSS = require('less-plugin-clean-css');
     var autoprefix = new LessPluginAutoPrefix({
         browsers: ["last 5 versions"],
         cascade: true
     });
     var cleancss = new LessPluginCleanCSS({
         advanced: true
     });
     var rename = require('gulp-rename');
     var plugins = [autoprefix];
     if (isProduction) {
         plugins.push(cleancss);
     }
     return gulp.src('src/splash.less')
         .pipe(rename({
             basename: isProduction ? 'splash.min' : 'splash'
         }))
         .pipe(less({
             plugins: plugins
         }))
         .pipe(gulp.dest(dest));
 };

 gulp.task('lessDemo', function() {
     return less('demo/', false);
 });

 gulp.task('lessDist', function() {
     return less('./', true);
 });

 gulp.task('copyDemo', function() {
     return gulp.src('src/splash.js')
         .pipe(gulp.dest('demo/'));
 });

 gulp.task('copyDist', function() {
     return gulp.src('./src/splash.js')
         .pipe(gulp.dest('./'));
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
     var rename = require('gulp-rename');

     return gulp.src('./src/splash.js')
         .pipe(rename({
             basename: 'splash.min'
         }))
         .pipe(uglify())
         .pipe(gulp.dest('./'));
 });
