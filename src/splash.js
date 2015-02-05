/**
 * splash-screen is very simple to use to setup a splash-screen for your
 * application
 *
 * @author Howard.Zuo
 * @date   Feb 5th, 2015
 *
 **/
(function(global, factory) {

    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        global.Splash = factory();
    }

}(this, function() {
    'use strict';

    var Splash = {};
    Splash.version = '2.0.0';

    var splashDiv = function() {
        var splash = document.createElement('div');
        splash.setAttribute('class', 'splash');
        return splash;
    };

    var tailingHandler = function($splash) {
        var loading = document.createElement('span');
        loading.innerText = 'Loading';
        $splash.appendChild(loading);
    };

    var windcatcherHandler = function($splash) {
        var windcatcher;
        for (var i = 0; i < 8; i++) {
            windcatcher = document.createElement('div');
            windcatcher.setAttribute('class', 'blade');
            $splash.appendChild(windcatcher);
        }
    };

    var emptyHandler = function() {};

    var themes = {
        tailing: tailingHandler,
        windcatcher: windcatcherHandler,
        'audio-wave': emptyHandler,
        'spinner-section': emptyHandler,
        'spinner-section-far': emptyHandler
    };

    var hasClass = function(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    var addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    };

    var removeClass = function(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    };

    var loadBody = function(callback) {
        var $body = document.body;
        if ($body) {
            callback($body);
            return;
        }
        setTimeout(function() {
            $body = document.body;
            if (!$body) {
                loadBody(callback);
                return;
            }
            callback($body);
        }, 100);
    };

    var $splash;

    Splash.enable = function(theme) {
        loadBody(function($body) {
            addClass($body, 'splashing');
            $splash = splashDiv();
            $body.appendChild($splash);

            if (!theme || !themes[theme]) {
                theme = 'tailing';
            }
            themes[theme]($splash);
            addClass($splash, theme);
        });
    };

    Splash.isRunning = function() {
        if (!document || !document.body) {
            return;
        }
        return hasClass(document.body, 'splashing');
    };

    Splash.destroy = function() {
        loadBody(function($body) {
            removeClass($body, 'splashing');
            if ($splash) {
                $body.removeChild($splash);
            }
        });
    };

    return Splash;

}));
