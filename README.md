splash-screen
=============
![][bower-url]
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A splash screen is required from end-user's perspective while developing SPA based application, cause that static resources usually concatenated into only one file in production release which might cost few seconds in loading phase.

A splash screen is great to be loaded parallel with the application part. Once the application part loaded, `destroy` `splash-screen` and display the application.

## Install ##

**bower**

```powershell
bower install --save splash-screen
```

**npm**

```powershell
npm install splash-screen
```

## Usage ##

### Import CSS ###

```html
<!-- all-in-one-css -->
<link rel="stylesheet" type="text/css" href="node_modules/splash-screen/dist/splash-screen.min.css">

<!-- specific-theme-css -->
<link rel="stylesheet" type="text/css" href="node_modules/splash-screen/dist/splash-screen-[theme].min.css">
```

**Typescript**

```typescript
//import all-in-one-bundle
//import splash-screen/dist/splash-screen.min.css here if you are using webpack, or inject it in your html
import { enable, destory } from 'splash-screen';

//enable with a specific theme.
//Possible themes are: 'tailing', 'audio-wave', 'windcatcher', 'spinner-section', 'spinner-section-far', 'circular'.
enable('tailing');

//destory the splash
destory();
```

```typescript
//import specific bundle
//import splash-screen/dist/splash-screen-[theme].min.css here if you are using webpack, or inject it in your html
import { enable, destory } from 'splash-screen/dist/splash-screen-[theme]';

//enable with no arg
enable();

//destory the splash
destory();
```

**ES2015**

Same as above

**CommonJS**

```javascript
//import all-in-one-bundle
//import splash-screen/dist/splash-screen.min.css here if you are using webpack, or inject it in your html
const {enable, destory} = require('splash-screen');

//enable with a specific theme.
//Possible themes are: 'tailing', 'audio-wave', 'windcatcher', 'spinner-section', 'spinner-section-far', 'circular'.
enable('tailing');

//destory the splash
destory();
```

```javascript
//import specific bundle
//import splash-screen/dist/splash-screen-[theme].min.css here if you are using webpack, or inject it in your html
const {enable, destory} = require('splash-screen/dist/splash-screen-[theme]');

//enable with no arg.
enable();

//destory the splash
destory();
```

**Script**

```html
<!-- import all-in-one-bundle -->
<link rel="stylesheet" href="node_modules/splash-screen/dist/splash-screen.min.css">
<script src="node_modules/splash-screen/dist/splash-screen.min.js"></script>

<script>
    const splash = window['splash-screen'];

    //enable with a specific theme.
    //Possible themes are: 'tailing', 'audio-wave', 'windcatcher', 'spinner-section', 'spinner-section-far', 'circular'.
    splash.enable('tailing');

    //destory the splash
    splash.destory();
</script>
```

```html
<!-- import specific bundle -->
<link rel="stylesheet" href="node_modules/splash-screen/dist/splash-screen-[theme].min.css">
<script src="node_modules/splash-screen/dist/splash-screen-[theme].min.js"></script>

<script>
    const theme = window['splash-screen-[theme]'];

    //enable with no arg.
    theme.enable();
    
    //destory the splash
    theme.destory();
</script>
```

## Themes ##

Multiple themes can be used while enable splash. Available themes: `tailing`, `windcatcher`, `audio-wave`, `spinner-section`, `spinner-section-far`, `circular`.


You would like to see real demo: [splash-screen](http://leftstick.github.io/splash-screen/)

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/splash-screen/master/LICENSE)

[bower-url]: https://img.shields.io/bower/v/splash-screen.svg
[npm-url]: https://npmjs.org/package/splash-screen
[npm-image]: https://badge.fury.io/js/splash-screen.png
[david-url]: https://david-dm.org/leftstick/splash-screen.png
[dt-url]:https://img.shields.io/npm/dt/splash-screen.svg
[license-url]:https://img.shields.io/npm/l/splash-screen.svg
