/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./themes/zwiebl-zwiebl_stellar/assets/js/main.js":
/*!********************************************************!*\
  !*** ./themes/zwiebl-zwiebl_stellar/assets/js/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
(function ($) {
  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)'
  });
  $(function () {
    var $window = $(window),
        $body = $('body'),
        $main = $('#main'); // Disable animations/transitions until the page has loaded.

    $body.addClass('is-loading');
    $window.on('load', function () {
      window.setTimeout(function () {
        $body.removeClass('is-loading');
      }, 100);
    }); // Fix: Placeholder polyfill.

    $('form').placeholder(); // Prioritize "important" elements on medium.

    skel.on('+medium -medium', function () {
      $.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
    }); // Nav.

    var $nav = $('#nav');

    if ($nav.length > 0) {
      // Shrink effect.
      $main.scrollex({
        mode: 'top',
        enter: function enter() {
          $nav.addClass('alt');
        },
        leave: function leave() {
          $nav.removeClass('alt');
        }
      }); // Links.

      var $nav_a = $nav.find('a');
      $nav_a.scrolly({
        speed: 1000,
        offset: function offset() {
          return $nav.height();
        }
      }).on('click', function () {
        var $this = $(this); // External link? Bail.

        if ($this.attr('href').charAt(0) != '#') return; // Deactivate all links.

        $nav_a.removeClass('active').removeClass('active-locked'); // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).

        $this.addClass('active').addClass('active-locked');
      }).each(function () {
        var $this = $(this),
            id = $this.attr('href'),
            $section = $(id); // No section for this link? Bail.

        if ($section.length < 1) return; // Scrollex.

        $section.scrollex({
          mode: 'top',
          top: '-20px',
          initialize: function initialize() {
            // Deactivate section.
            if (skel.canUse('transition')) $section.addClass('inactive');
          },
          enter: function enter() {
            // Activate section.
            $section.removeClass('inactive'); // No locked links? Deactivate all links and activate this section's one.

            if ($nav_a.filter('.active-locked').length == 0) {
              $nav_a.removeClass('active');
              $this.addClass('active');
            } // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass('active-locked')) $this.removeClass('active-locked');
          }
        });
      });
    } // Scrolly.


    $('.scrolly').scrolly({
      speed: 1000
    });
  });
})(jQuery);

/***/ }),

/***/ "./themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss":
/*!*****************************************************************!*\
  !*** ./themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleNotFoundError: Module not found: Error: Can't resolve '../themes/zwiebl_clearstellar/assets/css/images/overlay.png' in '/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/themes/zwiebl-zwiebl_stellar/assets/sass'\n    at factory.create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/webpack/lib/Compilation.js:823:10)\n    at factory (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/webpack/lib/NormalModuleFactory.js:397:22)\n    at resolver (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/webpack/lib/NormalModuleFactory.js:130:21)\n    at asyncLib.parallel (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/webpack/lib/NormalModuleFactory.js:224:22)\n    at /Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/neo-async/async.js:2825:7\n    at /Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/neo-async/async.js:6886:13\n    at normalResolver.resolve (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/webpack/lib/NormalModuleFactory.js:214:25)\n    at doResolve (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:184:12)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at resolver.doResolve (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn43 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at resolver.doResolve (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn1 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at hook.callAsync (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\n    at _fn0 (eval at create (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at fs.stat (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:22:13)\n    at process.nextTick (/Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./themes/zwiebl-zwiebl_stellar/assets/js/main.js ./themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/themes/zwiebl-zwiebl_stellar/assets/js/main.js */"./themes/zwiebl-zwiebl_stellar/assets/js/main.js");
module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/ctcaesguia/themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss */"./themes/zwiebl-zwiebl_stellar/assets/sass/zw_custom.scss");


/***/ })

/******/ });