/**
 * splash-screen is very simple to use to setup a splash-screen for your
 * application
 *
 * @author Howard.Zuo
 * @date   Sep 21th, 2014
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
    Splash.version = '1.0.0';

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

    var $html = document.getElementsByTagName('html')[0];
    var $body;

    var docWidth = document.documentElement.clientWidth;
    var docHeight = document.documentElement.clientHeight;

    var $splash;

    var setSplash = function() {
        addClass($html, 'splash');
        var loadDiv = document.createElement('div');
        loadDiv.setAttribute('class', 'load');
        loadDiv.innerText = 'Loading';
        var chargeDiv = document.createElement('div');
        chargeDiv.setAttribute('class', 'charge');

        var progressDiv = document.createElement('div');
        progressDiv.setAttribute('class', 'progress');
        progressDiv.appendChild(loadDiv);
        progressDiv.appendChild(chargeDiv);
        progressDiv.style.width = docWidth / 2 + 'px';
        progressDiv.style.left = docWidth / 4 + 'px';

        $splash = document.createElement('div');
        $splash.setAttribute('class', 'splash-screen');
        $splash.appendChild(progressDiv);

        $body.appendChild($splash);
    };

    var reloadBody = function() {
        setTimeout(function() {
            $body = document.body;
            if (!$body) {
                reloadBody();
                return;
            }
            setSplash();
        }, 100);
    };

    Splash.enable = function() {
        $body = document.body;
        if (!$body) {
            reloadBody();
            return;
        }
        setSplash();
    };

    Splash.destroy = function() {
        removeClass($html, 'splash');
        if ($body && $splash) {
            $body.removeChild($splash);
        }
    };

    return Splash;

}));
