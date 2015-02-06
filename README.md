# splash-screen ![](http://img.shields.io/badge/bower_module-v2.1.0-green.svg) #
=============

A splash screen is required from end-user's perspective while using SPA based application, cause that static resources usually concatenated into only one file in production release which might cost few seconds. A splash screen is better to describe the application is alive than just blank.


## Install ##

```powershell
bower install --save splash-screen
```

## Usage ##

```html
<link rel="stylesheet" type="text/css" href="splash.min.css">
<script type="text/javascript" src="splash.min.js"></script>
```

```javascript
Splash.enable(); //launch the splash-screen while needed

Splash.isRunning(); //detect if there is a splash running on the window

Splash.destroy();//destroy the splash-screen on demand
```

See full featured demo: [splash-screen](http://leftstick.github.io/splash-screen/)

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/splash-screen/master/LICENSE)