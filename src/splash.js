/**
 * splash-screen is very simple to use to setup a splash-screen for your
 * application
 *
 * @author Howard.Zuo
 * @date   Sep 21th, 2014
 *
 **/
(function(global, global) {
    'use strict';
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        global['Splash'] = factory();
    }

}(this, function() {

    var Splash = {};
    Splash.version = '1.0.0';

    Splash.enable = function() {

    };

}));
