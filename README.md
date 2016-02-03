# splash-screen #
=============
![][bower-url]
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A splash screen is required from end-user's perspective while developing SPA based application, cause that static resources usually concatenated into only one file in production release which might cost few seconds in loading phase.

A splash screen is great to be loaded parallel with the application part. Once the application part loaded, `destroy` `splash-screen` and display the application.

It is already used in http://www.hfworks.cn


## Install via bower ##

```powershell
bower install --save splash-screen
```

## Install via npm ##

```powershell
npm install --save splash-screen
```

## Usage ##

```html
<link rel="stylesheet" type="text/css" href="splash.min.css">
<script type="text/javascript" src="splash.min.js"></script>
```

```javascript
Splash.enable('windcatcher'); //launch the splash-screen while needed

Splash.isRunning(); //detect if there is a splash running on the window

Splash.destroy();//destroy the splash-screen on demand
```

## Themes ##

Multiple themes can be used while enable splash. Available themes: `tailing`, `windcatcher`, `audio-wave`, `spinner-section`, `spinner-section-far`, `circular`.


See full featured demo: [splash-screen](http://leftstick.github.io/splash-screen/)

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/splash-screen/master/LICENSE)

[bower-url]: https://img.shields.io/bower/v/splash-screen.svg
[npm-url]: https://npmjs.org/package/splash-screen
[npm-image]: https://badge.fury.io/js/splash-screen.png
[david-url]: https://david-dm.org/leftstick/splash-screen.png
[dt-url]:https://img.shields.io/npm/dt/splash-screen.svg
[license-url]:https://img.shields.io/npm/l/splash-screen.svg
