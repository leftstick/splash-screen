'use strict';

var gulp = require('gulp');
var webpack = require('webpack');

var less = function(dest, isProduction) {
    var less = require('gulp-less');
    var LessPluginAutoPrefix = require('less-plugin-autoprefix');
    var LessPluginCleanCSS = require('less-plugin-clean-css');
    var autoprefix = new LessPluginAutoPrefix({
        browsers: [
            'last 5 versions'
        ],
        cascade: true
    });
    var cleancss = new LessPluginCleanCSS({advanced: true});
    var rename = require('gulp-rename');
    var plugins = [autoprefix];
    if (isProduction) {
        plugins.push(cleancss);
    }
    return gulp.src('src/splash.less')
        .pipe(rename({
            basename: isProduction ? 'splash.min' : 'splash'
        }))
        .pipe(less({plugins: plugins}))
        .pipe(gulp.dest(dest));
};

gulp.task('lessDemo', function() {
    return less('demo/', false);
});

gulp.task('lessDist', function() {
    return less('./dist', true);
});

var generateJS = function(config, cp) {
    var compiler = webpack(config);
    compiler.run(function(err, stats) {
        if (err) {
            return console.log(err);
        }
        cp();
    });
};

gulp.task('devJs', function(cp) {
    generateJS(require('./webpack.config.dev'), cp);
});

gulp.task('copyDistMin', function(cp) {
    generateJS(require('./webpack.config.prod.min'), cp);
});

gulp.task('copyDistNoMin', function(cp) {
    generateJS(require('./webpack.config.prod.nomin'), cp);
});

gulp.task('dev', ['lessDemo', 'devJs'], function() {
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


gulp.task('dist', ['lessDist', 'copyDistMin', 'copyDistNoMin']);
