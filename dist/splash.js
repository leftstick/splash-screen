/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * splash-screen is very simple to use to setup a splash-screen for your
	 * application
	 *
	 * @author Howard.Zuo
	 * @date   May 11th, 2016
	 *
	 **/
	"use strict";
	var Splash = {
	    version: '2.4.0',
	    enable: function (theme) {
	        loadBody(function ($body) {
	            addClass($body, 'splashing');
	            var $splash = splashDiv();
	            $body.appendChild($splash);
	            if (!theme || !themes[theme]) {
	                theme = 'tailing';
	            }
	            themes[theme]($splash);
	            addClass($splash, theme);
	        });
	    },
	    isRunning: function () {
	        if (!document || !document.body) {
	            return;
	        }
	        return hasClass(document.body, 'splashing');
	    },
	    destroy: function () {
	        loadBody(function ($body) {
	            removeClass($body, 'splashing');
	            var $splash = getSplash($body);
	            if ($splash) {
	                $body.removeChild($splash);
	            }
	        });
	    }
	};
	exports.Splash = Splash;
	var elementClass = function (tag, className) {
	    var ele = document.createElement(tag);
	    ele.setAttribute('class', className);
	    return ele;
	};
	var elementTxt = function (tag, text) {
	    var ele = document.createElement(tag);
	    ele.innerText = text;
	    return ele;
	};
	var splashDiv = function () {
	    return elementClass('div', 'splash');
	};
	var tailingHandler = function ($splash) {
	    $splash.appendChild(elementTxt('span', 'Loading'));
	};
	var windcatcherHandler = function ($splash) {
	    for (var i = 0; i < 8; i++) {
	        $splash.appendChild(elementClass('div', 'blade'));
	    }
	};
	var circularHandler = function ($splash) {
	    var arr = [
	        'spinner-blue',
	        'spinner-red',
	        'spinner-yellow',
	        'spinner-green'
	    ];
	    for (var i = 0; i < arr.length; i++) {
	        var layer = elementClass('div', 'spinner-layer ' + arr[i]);
	        var circleLeft = elementClass('div', 'circle-clipper left');
	        var circle01 = elementClass('div', 'circle');
	        circleLeft.appendChild(circle01);
	        layer.appendChild(circleLeft);
	        var gapPatch = elementClass('div', 'gap-patch');
	        var circle02 = elementClass('div', 'circle');
	        gapPatch.appendChild(circle02);
	        layer.appendChild(gapPatch);
	        var circleRight = elementClass('div', 'circle-clipper right');
	        var circle03 = elementClass('div', 'circle');
	        circleRight.appendChild(circle03);
	        layer.appendChild(circleRight);
	        $splash.appendChild(layer);
	    }
	};
	var emptyHandler = function () { };
	var themes = {
	    tailing: tailingHandler,
	    windcatcher: windcatcherHandler,
	    'audio-wave': emptyHandler,
	    'spinner-section': emptyHandler,
	    'spinner-section-far': emptyHandler,
	    circular: circularHandler
	};
	var hasClass = function (ele, cls) {
	    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	};
	var addClass = function (ele, cls) {
	    if (!hasClass(ele, cls)) {
	        ele.className += ' ' + cls;
	    }
	};
	var removeClass = function (ele, cls) {
	    if (hasClass(ele, cls)) {
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	        ele.className = ele.className.replace(reg, ' ');
	    }
	};
	var loadBody = function (callback) {
	    var $body = document.body;
	    if ($body) {
	        callback($body);
	        return;
	    }
	    setTimeout(function () {
	        $body = document.body;
	        if (!$body) {
	            loadBody(callback);
	            return;
	        }
	        callback($body);
	    }, 100);
	};
	var getSplash = function ($body) {
	    var children = $body.children;
	    for (var i = 0; i < children.length; i++) {
	        if (hasClass(children[i], 'splash')) {
	            return children[i];
	        }
	    }
	};


/***/ }
/******/ ]);