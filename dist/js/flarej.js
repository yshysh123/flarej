(function(e){var r=e.babelHelpers={};r.typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol?"symbol":typeof e};r.jsx=function(){var e=typeof Symbol==="function"&&Symbol.for&&Symbol.for("react.element")||60103;return function r(t,n,o,i){var f=t&&t.defaultProps;var u=arguments.length-3;if(!n&&u!==0){n={}}if(n&&f){for(var a in f){if(n[a]===void 0){n[a]=f[a]}}}else if(!n){n=f||{}}if(u===1){n.children=i}else if(u>1){var l=Array(u);for(var c=0;c<u;c++){l[c]=arguments[c+3]}n.children=l}return{$$typeof:e,type:t,key:o===undefined?null:""+o,ref:null,props:n,_owner:null}}}();r.asyncToGenerator=function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,i){try{var f=r[o](i);var u=f.value}catch(e){t(e);return}if(f.done){e(u)}else{Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)})}}n("next")})}};r.classCallCheck=function(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}};r.createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(r,t,n){if(t)e(r.prototype,t);if(n)e(r,n);return r}}();r.defineEnumerableProperties=function(e,r){for(var t in r){var n=r[t];n.configurable=n.enumerable=true;if("value"in n)n.writable=true;Object.defineProperty(e,t,n)}return e};r.defaults=function(e,r){var t=Object.getOwnPropertyNames(r);for(var n=0;n<t.length;n++){var o=t[n];var i=Object.getOwnPropertyDescriptor(r,o);if(i&&i.configurable&&e[o]===undefined){Object.defineProperty(e,o,i)}}return e};r.defineProperty=function(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e};r.extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}return e};r.get=function e(r,t,n){if(r===null)r=Function.prototype;var o=Object.getOwnPropertyDescriptor(r,t);if(o===undefined){var i=Object.getPrototypeOf(r);if(i===null){return undefined}else{return e(i,t,n)}}else if("value"in o){return o.value}else{var f=o.get;if(f===undefined){return undefined}return f.call(n)}};r.inherits=function(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof r)}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(r)Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r};r.instanceof=function(e,r){if(r!=null&&typeof Symbol!=="undefined"&&r[Symbol.hasInstance]){return r[Symbol.hasInstance](e)}else{return e instanceof r}};r.interopRequireDefault=function(e){return e&&e.__esModule?e:{default:e}};r.interopRequireWildcard=function(e){if(e&&e.__esModule){return e}else{var r={};if(e!=null){for(var t in e){if(Object.prototype.hasOwnProperty.call(e,t))r[t]=e[t]}}r.default=e;return r}};r.newArrowCheck=function(e,r){if(e!==r){throw new TypeError("Cannot instantiate an arrow function")}};r.objectDestructuringEmpty=function(e){if(e==null)throw new TypeError("Cannot destructure undefined")};r.objectWithoutProperties=function(e,r){var t={};for(var n in e){if(r.indexOf(n)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,n))continue;t[n]=e[n]}return t};r.possibleConstructorReturn=function(e,r){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return r&&(typeof r==="object"||typeof r==="function")?r:e};r.selfGlobal=typeof e==="undefined"?self:e;r.set=function e(r,t,n,o){var i=Object.getOwnPropertyDescriptor(r,t);if(i===undefined){var f=Object.getPrototypeOf(r);if(f!==null){e(f,t,n,o)}}else if("value"in i&&i.writable){i.value=n}else{var u=i.set;if(u!==undefined){u.call(o,n)}}return n};r.slicedToArray=function(){function e(e,r){var t=[];var n=true;var o=false;var i=undefined;try{for(var f=e[Symbol.iterator](),u;!(n=(u=f.next()).done);n=true){t.push(u.value);if(r&&t.length===r)break}}catch(e){o=true;i=e}finally{try{if(!n&&f["return"])f["return"]()}finally{if(o)throw i}}return t}return function(r,t){if(Array.isArray(r)){return r}else if(Symbol.iterator in Object(r)){return e(r,t)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}();r.slicedToArrayLoose=function(e,r){if(Array.isArray(e)){return e}else if(Symbol.iterator in Object(e)){var t=[];for(var n=e[Symbol.iterator](),o;!(o=n.next()).done;){t.push(o.value);if(r&&t.length===r)break}return t}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}};r.taggedTemplateLiteral=function(e,r){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))};r.taggedTemplateLiteralLoose=function(e,r){e.raw=r;return e};r.temporalRef=function(e,r,t){if(e===t){throw new ReferenceError(r+" is not defined - temporal dead zone")}else{return e}};r.temporalUndefined={};r.toArray=function(e){return Array.isArray(e)?e:Array.from(e)};r.toConsumableArray=function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}else{return Array.from(e)}}})(typeof global==="undefined"?self:global);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("react"), require("nornj-react"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "react", "nornj-react"], factory);
	else if(typeof exports === 'object')
		exports["FlareJ"] = factory(require("nornj"), require("react"), require("nornj-react"));
	else
		root["FlareJ"] = factory(root["nj"], root["React"], root["njr"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _core = __webpack_require__(1);

	var _core2 = babelHelpers.interopRequireDefault(_core);

	var _nornj = __webpack_require__(2);

	var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

	var _config = __webpack_require__(3);

	var _config2 = babelHelpers.interopRequireDefault(_config);

	var _utils = __webpack_require__(4);

	var utils = babelHelpers.interopRequireWildcard(_utils);

	var _pagination = __webpack_require__(15);

	var _pagination2 = babelHelpers.interopRequireDefault(_pagination);

	var _grid = __webpack_require__(30);

	var _gesture = __webpack_require__(33);

	var _gesture2 = babelHelpers.interopRequireDefault(_gesture);

	_core2.default.config = _config2.default;
	babelHelpers.extends(_core2.default, utils, {
	  Pagination: _pagination2.default,
	  Row: _grid.Row,
	  RowLeft: _grid.RowLeft,
	  RowRight: _grid.RowRight,
	  Col: _grid.Col,
	  ClearFix: _grid.ClearFix,
	  Gesture: _gesture2.default
	});

	var _global = typeof self !== 'undefined' ? self : global;

	module.exports = _global.FlareJ = _global.fj = _core2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fj = {
	  rootPath: '../../flarej/',
	  initTheme: 'concise',
	  ver: null,
	  themeStoreName: 'fj_theme',
	  //Chinese pinyin fonts
	  GB2312Pinyin: {}
	};

	exports.default = fj;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (configs) {
	  babelHelpers.extends(_core2.default, configs);
	};

	var _core = __webpack_require__(1);

	var _core2 = babelHelpers.interopRequireDefault(_core);

	;

	//Set globel configs

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(5);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Date = exports.Math = exports.Sort = exports.RegExp = undefined;

	var _common = __webpack_require__(6);

	Object.keys(_common).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _common[key];
	    }
	  });
	});

	var _page = __webpack_require__(7);

	Object.keys(_page).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _page[key];
	    }
	  });
	});

	var _browsers = __webpack_require__(8);

	Object.keys(_browsers).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _browsers[key];
	    }
	  });
	});

	var _delayOperate = __webpack_require__(9);

	Object.keys(_delayOperate).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _delayOperate[key];
	    }
	  });
	});

	var _domEvent = __webpack_require__(10);

	Object.keys(_domEvent).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _domEvent[key];
	    }
	  });
	});

	var _regexp = __webpack_require__(11);

	var _RegExp = babelHelpers.interopRequireWildcard(_regexp);

	var _sort = __webpack_require__(12);

	var _Sort = babelHelpers.interopRequireWildcard(_sort);

	var _math = __webpack_require__(14);

	var _Math = babelHelpers.interopRequireWildcard(_math);

	var _date = __webpack_require__(13);

	var _Date = babelHelpers.interopRequireWildcard(_date);

	exports.RegExp = _RegExp;
	exports.Sort = _Sort;
	exports.Math = _Math;
	exports.Date = _Date;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.guid = undefined;
	exports.bindThis = bindThis;

	var _core = __webpack_require__(1);

	var _core2 = babelHelpers.interopRequireDefault(_core);

	//Get global unique id
	var guid = exports.guid = function guid() {
	  return new Date().getTime() + Math.random().toFixed(6).substr(2);
	};

	//为方法绑定this对象
	function bindThis(context, fns) {
	  fns.forEach(function (fn) {
	    context[fn] = context[fn].bind(context);
	  });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pageHeight = exports.pageWidth = exports.mediaQuery = undefined;

	var _core = __webpack_require__(1);

	var _core2 = babelHelpers.interopRequireDefault(_core);

	var win = window,
	    doc = document;

	//Media query
	var mediaQuery = exports.mediaQuery = function mediaQuery(media) {
	  var ret = false;

	  if (win.matchMedia) {
	    //If the browser support matchMedia
	    ret = win.matchMedia(media).matches;
	  } else {
	    //For browsers that support matchMedium api such as IE 9 and webkit. Reference by https://github.com/paulirish/matchMedia.js/blob/master/matchMedia.js
	    var styleMedia = win.styleMedia || win.media;
	    if (styleMedia) {
	      ret = styleMedia.matchMedium(media || 'all');
	    }
	  }

	  return ret;
	};

	//Get current width of page
	var pageWidth = exports.pageWidth = function pageWidth() {
	  return win.innerWidth != null ? win.innerWidth : doc.documentElement && doc.documentElement.clientWidth != null ? doc.documentElement.clientWidth : doc.body != null ? doc.body.clientWidth : null;
	};

	//Save initial width of page
	_core2.default.globalWidth = pageWidth();

	//Get current height of page
	var pageHeight = exports.pageHeight = function pageHeight() {
	  return win.innerHeight != null ? win.innerHeight : doc.documentElement && doc.documentElement.clientHeight != null ? doc.documentElement.clientHeight : doc.body != null ? doc.body.clientHeight : null;
	};

	//Save initial height of page
	_core2.default.globalHeight = pageHeight();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _docMode = document.documentMode,
	    _ua = navigator.userAgent.toLowerCase();

	var _browser = {
	  version: (_ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
	  opera: /opera/i.test(_ua),
	  firefox: /firefox/i.test(_ua),
	  ie: /msie/i.test(_ua) && !/opera/.test(_ua),
	  chrome: /chrome/i.test(_ua) && /webkit/i.test(_ua) && /mozilla/i.test(_ua),
	  android: _ua.indexOf('android') > -1,
	  iphone: _ua.indexOf('iphone') > -1,
	  ipad: _ua.indexOf('ipad') > -1,
	  ipod: _ua.indexOf('ipod') > -1,
	  windowsPhone: _ua.indexOf('windows phone') > -1
	};
	_browser.safari = /webkit/i.test(_ua) && !_browser.chrome;
	_browser.mozilla = /mozilla/i.test(_ua) && !/(compatible|webkit)/.test(_ua) && !_browser.chrome;

	//IE
	var isIE = exports.isIE = _browser.ie || !!window.ActiveXObject || "ActiveXObject" in window;

	//IE9
	var isIE9 = exports.isIE9 = isIE && _browser.version == 9.0 && (!_docMode || _docMode == 9) || _docMode == 9;

	//IE10
	var isIE10 = exports.isIE10 = isIE && _browser.version == 10.0 && (!_docMode || _docMode == 10) || _docMode == 10;

	//IE11
	var isIE11 = exports.isIE11 = isIE && _browser.version == 11.0 && (!_docMode || _docMode == 11) || _docMode == 11;

	//IE version less than 9
	var isIElt9 = exports.isIElt9 = isIE && !isIE9 && !isIE10 && !isIE11;

	//IE version less than 11
	var isIElt11 = exports.isIElt11 = isIE9 || isIE10;

	//IE version more than 10
	var isIEgt10 = exports.isIEgt10 = isIE10 || isIE11;

	//IE version more than 9
	var isIEgt9 = exports.isIEgt9 = isIE9 || isIEgt10;

	//FireFox
	var isFF = exports.isFF = _browser.mozilla;

	//Chrome
	var isChrome = exports.isChrome = _browser.chrome;

	//Safari
	var isSafari = exports.isSafari = _browser.safari;

	//Opera
	var isOpera = exports.isOpera = _browser.opera;

	//Android
	var isAndroid = exports.isAndroid = _browser.android;

	//Iphone
	var isIphone = exports.isIphone = _browser.iphone;

	//Ipad
	var isIpad = exports.isIpad = _browser.ipad;

	//Ipod
	var isIpod = exports.isIpod = _browser.ipod;

	//Ios
	var isIos = exports.isIos = isIphone || isIpad || isIpod;

	//Windows Phone
	var isWindowsPhone = exports.isWindowsPhone = _browser.windowsPhone;

	//Mobile browser
	var isMobile = exports.isMobile = isAndroid || isIos || isWindowsPhone;

	//Webkit and blink core browser
	var isWebkit = exports.isWebkit = isChrome || isSafari || isAndroid || isIos;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//Lazy to do something
	var lazyDo = exports.lazyDo = function lazyDo(fn, timeOut, doName, obj) {
	  var sto = null;

	  if (!obj) {
	    obj = window;
	  }
	  if (timeOut == null) {
	    timeOut = 25;
	  }

	  //If before the implementation of the operation has not exceeded the time,then make it cancel.
	  if (doName && obj[doName]) {
	    clearTimeout(obj[doName]);
	  }

	  //Delay for a period of time to perform the operation.
	  sto = setTimeout(function () {
	    fn.call(obj);
	  }, timeOut);

	  if (doName) {
	    obj[doName] = sto;
	  }

	  return sto;
	};

	//Poll to do something
	var pollDo = exports.pollDo = function pollDo(fn, timeOut, doName, obj) {
	  var siv = null;

	  if (!obj) {
	    obj = window;
	  }
	  if (timeOut == null) {
	    timeOut = 100;
	  }

	  //If the previous poll operation is exist,then make it cancel.
	  if (doName && obj[doName]) {
	    clearInterval(obj[doName]);
	  }

	  //Polling execution operations every interval a period of time.
	  siv = setInterval(function () {
	    if (fn.call(obj) === false) {
	      clearInterval(siv);
	    }
	  }, timeOut);

	  if (doName) {
	    obj[doName] = siv;
	  }

	  return siv;
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var doc = document;

	//Add dom event
	var on = exports.on = function on(name, fn, elem) {
	  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  (elem || doc).addEventListener(name, fn, useCapture);
	};

	//Remove dom event
	var off = exports.off = function off(name, fn, elem) {
	  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  (elem || doc).removeEventListener(name, fn, useCapture);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var num = /^\+?[1-9][0-9]*$/; //大于0的整数
	var numZ = /^\+?[0-9][0-9]*$/; //正整数(包含0)
	var numZ2 = /^-?[0-9][0-9]*$/; //整数(包含0、负数)
	var numF = /^-?([0-9][0-9]*)(\.\d{1,2})?$/; //数字(包含负数、0,最多两位小数)
	var numF2 = /^([0-9][0-9]*)(\.\d{1,2})?$/; //数字(不含负数,最多两位小数)
	var numD = /^-?([0-9][0-9]*)(\.\d{1,10})?$/; //数字(包含负数、0,最多10位小数)
	var numD2 = /^(([0-9]+[\.]?[0-9]+)|[1-9])$/; //数字(不含负数和0,无限位小数)
	var numD3 = /^(([0-9]+[\.]?[0-9]+)|[0-9])$/; //数字(不含负数,无限位小数)
	var num0_100 = /^(?:0|[1-9][0-9]?|100)$/; //0-100内整数
	var num0_1 = /^[01]$|^0\.\d{1,2}$|^1\.0{1,2}$/; //0-1之间小数(最多两位),包含0、1
	var post = /^\d{6}$/; //邮编
	var phone = /^(((\()?\d{2,4}(\))?[-(\s)*]){0,2})?(\d{7,8})$/; //固定电话(区号部分为2-4位数字,外面可以加括号,后面可以加斜杠或空格,可重复1-2次;电话号码部分为7-8位)
	var mobile = /^[1][3,5,8][0-9]{9}$/; //手机号
	var email = /^[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@(([0-9a-zA-Z])+([-\w]*[0-9a-zA-Z])*\.)+[a-zA-Z]{2,9}$/; //Email(@前面不能以点为结尾)
	var date = /^\d{4}-\d{2}-\d{2}$/; //日期是否yyyy-MM-dd格式
	var time = /^\d{2}:\d{2}:\d{2}$/; //时间是否hh:mm:ss格式
	var datetime = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/; //日期时间是否yyyy-MM-dd hh:mm:ss格式
	var datetimeO = /^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}:\d{2})?$/; //是否date或datetime格式
	var pass = /^[0-9a-zA-Z]{6,16}$/; //密码格式是否由字母和数字组成,长度为6-16位
	var user = /^[a-zA-Z][a-zA-Z0-9_\u4E00-\u9FA5]{3,15}$/; //用户名格式是否由字母、数字、中文和下划线组成,以字母开头,长度为4-16位
	var ip = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}(:(6553[0-5]|655[0-2]\d|65[0-4]\d{2}|6[0-4]\d{3}|[1-5]\d{4}|[1-9]\d{0,3}))?$/; //IP格式为xxx.xxx.xxx.xxx或xxx.xxx.xxx.xxx:端口号,xxx的值必须是0-255,端口号的值必须是1-65535
	var cardId = /^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i; //身份证
	var enFirst = /^[a-zA-Z][\s\S]*$/; //英文开头
	var chFirst = /^[\u4E00-\u9FA5][\s\S]*$/; //中文开头
	var percent = /^\+?(([1-9]\d?)|(100)|(0))\%$/; //百分数(0%-100%)

	exports.num = num;
	exports.numZ = numZ;
	exports.numZ2 = numZ2;
	exports.numF = numF;
	exports.numF2 = numF2;
	exports.numD = numD;
	exports.numD2 = numD2;
	exports.numD3 = numD3;
	exports.num0_100 = num0_100;
	exports.num0_1 = num0_1;
	exports.post = post;
	exports.phone = phone;
	exports.mobile = mobile;
	exports.email = email;
	exports.date = date;
	exports.time = time;
	exports.datetime = datetime;
	exports.datetimeO = datetimeO;
	exports.pass = pass;
	exports.user = user;
	exports.ip = ip;
	exports.cardId = cardId;
	exports.enFirst = enFirst;
	exports.chFirst = chFirst;
	exports.percent = percent;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compareStringCH = exports.compareStringEN = exports.compareDate = exports.compareNumber = exports.compare = exports.getGB2312Pinyin = exports.getFirstChar = undefined;

	var _core = __webpack_require__(1);

	var _core2 = babelHelpers.interopRequireDefault(_core);

	var _regexp = __webpack_require__(11);

	var regExp = babelHelpers.interopRequireWildcard(_regexp);

	var _date = __webpack_require__(13);

	var date = babelHelpers.interopRequireWildcard(_date);


	//取字符串的第一个字符
	var getFirstChar = function getFirstChar(s) {
	  if (s == '') {
	    return '';
	  }

	  return (s + '').substr(0, 1);
	};

	//取得汉字的拼音
	var getGB2312Pinyin = function getGB2312Pinyin(str, sp) {
	  var i = void 0,
	      l = void 0,
	      t = void 0,
	      p = void 0,
	      ret = '';
	  if (sp == null) {
	    sp = '';
	  }

	  var _fj$GB2312Pinyin = _core2.default.GB2312Pinyin,
	      fonts = _fj$GB2312Pinyin.fonts,
	      pinyin = _fj$GB2312Pinyin.pinyin;

	  for (i = 0, l = str.length; i < l; i++) {
	    if (str.charCodeAt(i) >= 0x4e00) {
	      p = fonts.indexOf(str.charAt(i));
	      if (p > -1 && p < 3755) {
	        for (t = pinyin.length - 1; t > 0; t = t - 2) {
	          if (pinyin[t] <= p) {
	            break;
	          }
	        }
	        if (t > 0) {
	          ret += pinyin[t - 1] + sp;
	        }
	      }
	    }
	  }

	  return ret.substr(0, ret.length - sp.length);
	};

	//简单值比较算法
	var compare = function compare(x, y) {
	  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var spC = arguments[3];
	  var spC2 = arguments[4];
	  var spV = arguments[5];

	  spV = spV != null ? spV : -1;
	  if (spC && !spC2) {
	    //如有禁止排序标记则拍在最低位置
	    return -1;
	  } else if (!spC && spC2) {
	    return 1;
	  } else if (spC && spC2) {
	    return 0;
	  }
	  if (x > y) {
	    return !isAsc ? -1 : 1;
	  } else if (x < y) {
	    return !isAsc ? 1 : -1;
	  } else {
	    return 0;
	  }
	};

	//数字比较算法
	var compareNumber = function compareNumber(x, y) {
	  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var spC = arguments[3];
	  var spC2 = arguments[4];
	  var spV = arguments[5];

	  var r = /[^d|.|-]/g;
	  x = (x + '').replace(r, '');
	  y = (y + '').replace(r, '');
	  return compare(x * 1, y * 1, isAsc, spC, spC2, spV);
	};

	//日期比较算法
	var compareDate = function compareDate(x, y) {
	  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var spC = arguments[3];
	  var spC2 = arguments[4];
	  var spV = arguments[5];

	  var d = '1900-01-01';
	  x = date.parse(x == '' ? d : x);
	  y = date.parse(y == '' ? d : y);
	  var z = x - y;

	  spV = spV != null ? spV : -1;
	  if (spC && !spC2) {
	    //如有禁止排序标记则拍在最低位置
	    return -1;
	  } else if (!spC && spC2) {
	    return 1;
	  } else if (spC && spC2) {
	    return 0;
	  }
	  return !isAsc ? z * -1 : z;
	};

	//英文字符串比较算法
	var compareStringEN = function compareStringEN(x, y) {
	  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var spC = arguments[3];
	  var spC2 = arguments[4];
	  var spV = arguments[5];

	  x = getFirstChar(x);
	  y = getFirstChar(y);
	  return compare(x, y, isAsc, spC, spC2, spV);
	};

	//中文字符串比较算法
	var compareStringCH = function compareStringCH(x, y) {
	  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	  var spC = arguments[3];
	  var spC2 = arguments[4];
	  var spV = arguments[5];

	  if (_core2.default.GB2312Pinyin.fonts) {
	    //如果第一个字符非中文的则不获取拼音直接用第一个字符比较
	    x = x == '' ? '' : regExp.chFirst.test(x) ? getGB2312Pinyin(getFirstChar(x)) : getFirstChar(x);
	    y = y == '' ? '' : regExp.chFirst.test(y) ? getGB2312Pinyin(getFirstChar(y)) : getFirstChar(y);
	    return compare(x, y, isAsc, spC, spC2, spV);
	  } else {
	    return compareStringEN(x, y, isAsc, spC, spC2, spV);
	  }
	};

	exports.getFirstChar = getFirstChar;
	exports.getGB2312Pinyin = getGB2312Pinyin;
	exports.compare = compare;
	exports.compareNumber = compareNumber;
	exports.compareDate = compareDate;
	exports.compareStringEN = compareStringEN;
	exports.compareStringCH = compareStringCH;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GetDateStr = exports.toFormatString = exports.dateDiff = exports.parse = undefined;

	var _math = __webpack_require__(14);

	var math = babelHelpers.interopRequireWildcard(_math);


	//日期转换
	var parse = function parse(s) {
	  var t = s.replace(/-/g, '/').replace(/T/g, ' ');
	  var iDot = t.indexOf('.');
	  if (iDot != -1) {
	    t = t.substr(0, iDot);
	  }

	  return new Date(t);
	};

	//日期比较
	var dateDiff = function dateDiff(sDate1, sDate2, returnType, useAbs) {
	  var aDate = void 0,
	      aDate1 = void 0,
	      aDate2 = void 0,
	      oDate1 = void 0,
	      oDate2 = void 0,
	      days = void 0,
	      iDays = void 0;

	  if ((typeof sDate1 === 'undefined' ? 'undefined' : babelHelpers.typeof(sDate1)) != 'object') {
	    if (sDate1.indexOf(' ') != -1) {
	      aDate = sDate1.split(' ');
	      aDate1 = aDate[0].split('-');
	      aDate2 = aDate[1].split(':');
	      oDate1 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2], aDate2[0], aDate2[1], aDate2[2]);
	    } else {
	      aDate1 = sDate1.split('-');
	      oDate1 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2]);
	    }
	  } else {
	    oDate1 = sDate1;
	  }

	  if ((typeof sDate2 === 'undefined' ? 'undefined' : babelHelpers.typeof(sDate2)) != 'object') {
	    if (sDate2.indexOf(' ') != -1) {
	      aDate = sDate2.split(' ');
	      aDate1 = aDate[0].split('-');
	      aDate2 = aDate[1].split(':');
	      oDate2 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2], aDate2[0], aDate2[1], aDate2[2]);
	    } else {
	      aDate1 = sDate2.split('-');
	      oDate2 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2]);
	    }
	  } else {
	    oDate2 = sDate2;
	  }

	  days = oDate1 - oDate2; //计算日期差值
	  if (useAbs) {
	    //取绝对值
	    days = Math.abs(days);
	  }

	  //把相差的毫秒数转换为日期数值
	  switch (returnType) {
	    case 'h':
	      //小时
	      iDays = parseInt(days / 1000 / 60 / 60, 10);
	      break;
	    case 'm':
	      //分钟
	      iDays = parseInt(days / 1000 / 60, 10);
	      break;
	    case 's':
	      //秒
	      iDays = parseInt(days / 1000, 10);
	      break;
	    case 'ms':
	      //毫秒
	      iDays = days;
	      break;
	    default:
	      //天
	      iDays = parseInt(days / 1000 / 60 / 60 / 24, 10);
	      break;
	  }

	  return iDays;
	};

	//日期格式化
	var toFormatString = function toFormatString(date, fs, noAddZero) {
	  if (fs.length == 1) {
	    return date.getFullYear() + fs + (date.getMonth() + 1) + fs + date.getDate();
	  }
	  fs = fs.replace('yyyy', date.getFullYear());
	  fs = fs.replace('mm', noAddZero ? date.getMonth() + 1 : math.addZero(date.getMonth() + 1));
	  fs = fs.replace('dd', noAddZero ? date.getDate() : math.addZero(date.getDate()));
	  fs = fs.replace('hh', noAddZero ? date.getHours() : math.addZero(date.getHours()));
	  fs = fs.replace('MM', noAddZero ? date.getMinutes() : math.addZero(date.getMinutes()));
	  fs = fs.replace('ss', noAddZero ? date.getSeconds() : math.addZero(date.getSeconds()));
	  return fs;
	};

	//获取某些天后的日期
	var GetDateStr = function GetDateStr(addDays, addDays2, joinTxt, fs) {
	  var dd = new Date(),
	      d1 = void 0,
	      d2 = '';
	  dd.setDate(dd.getDate() + addDays);
	  d1 = toFormatString(dd, fs != null ? fs : 'yyyy-mm-dd');
	  if (addDays2 != null) {
	    //第二个日期
	    var dd2 = new Date();
	    dd2.setDate(dd2.getDate() + addDays2);
	    d2 = toFormatString(dd2, fs != null ? fs : 'yyyy-mm-dd');
	  }
	  return d1 + (joinTxt != null ? joinTxt : '') + d2;
	};

	exports.parse = parse;
	exports.dateDiff = dateDiff;
	exports.toFormatString = toFormatString;
	exports.GetDateStr = GetDateStr;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//千分位转换
	var outputMoney = function outputMoney(number) {
	  var bit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	  var numO = number; //保存原先值
	  if (isNaN(number) || number == '') {
	    return '0';
	  }

	  number = number.toFixed(bit);
	  try {
	    if (number < 0) {
	      return '-' + outputDollars(Math.floor(Math.abs(number) - 0) + '') + outputCents(Math.abs(number) - 0, bit);
	    } else {
	      return outputDollars(Math.floor(number - 0) + '') + outputCents(number - 0, bit);
	    }
	  } catch (e) {
	    //出现异常时返回原先值
	    return numO;
	  }
	};

	var outputDollars = function outputDollars(number) {
	  if (number.length <= 3) {
	    return number == '' ? '0' : number;
	  } else {
	    var mod = number.length % 3;
	    var output = mod == 0 ? '' : number.substring(0, mod);
	    for (var i = 0, l = Math.floor(number.length / 3); i < l; i++) {
	      if (mod == 0 && i == 0) {
	        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
	      } else {
	        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
	      }
	    }

	    return output;
	  }
	};

	var outputCents = function outputCents(amount, bit) {
	  if (bit != null) {
	    amount = amount.toFixed(bit);
	  } else {
	    bit = 2;
	  }

	  if (bit > 0) {
	    amount = (amount + '').match(/\.\d*$/g); //截取小数点及小数部分
	    //amount = (amount + '').replace(/0+?$/g, '');  //去除小数点后多余的0
	  } else {
	    amount = '';
	  }

	  return amount;
	};

	//在1位数字前补零
	var addZero = function addZero(n) {
	  return ('00' + n).substr(('00' + n).length - 2);
	};

	exports.outputMoney = outputMoney;
	exports.outputDollars = outputDollars;
	exports.outputCents = outputCents;
	exports.addZero = addZero;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _pagination = __webpack_require__(16);

	var _pagination2 = babelHelpers.interopRequireDefault(_pagination);

	exports.default = _pagination2.default;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _dec3, _class5, _class6, _temp3, _dec4, _class7, _class8, _temp4;

	var _react = __webpack_require__(17);

	var _nornjReact = __webpack_require__(18);

	var _classnames = __webpack_require__(19);

	var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

	var _widget = __webpack_require__(20);

	var _widget2 = babelHelpers.interopRequireDefault(_widget);

	var _utils = __webpack_require__(4);

	var utils = babelHelpers.interopRequireWildcard(_utils);

	var _paginationT = __webpack_require__(29);

	var _paginationT2 = babelHelpers.interopRequireDefault(_paginationT);

	/**
	 * 计算总页数
	 */
	function _getPageCount(count, pageSize) {
	  return parseInt(count % pageSize > 0 ? count / pageSize + 1 : count / pageSize, 10);
	}

	/**
	 * 分页组件
	 */
	var Pagination = (_dec = (0, _nornjReact.registerTmpl)({
	  name: 'fj-Pagination',
	  template: _paginationT2.default.pagination
	}), _dec(_class = (_temp = _class2 = function (_Widget) {
	  babelHelpers.inherits(Pagination, _Widget);

	  function Pagination(props) {
	    babelHelpers.classCallCheck(this, Pagination);
	    return babelHelpers.possibleConstructorReturn(this, _Widget.call(this, props, {
	      pageIndex: props.pageIndex,
	      pageSize: props.pageSize
	    }));
	  }

	  Pagination.prototype.init = function init() {
	    this.state.pageCount = this.getPageCount(); //总页数
	    _Widget.prototype.init.call(this);

	    this.pageSizeChange = this.pageSizeChange.bind(this);
	    this.pageIndexBlur = this.pageIndexBlur.bind(this);
	    this.setGoPage = this.setGoPage.bind(this);
	    this.goPage = this.goPage.bind(this);
	    this.refresh = this.refresh.bind(this);
	  };

	  Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _props = this.props,
	        pageIndex = _props.pageIndex,
	        count = _props.count,
	        pageSize = _props.pageSize;
	    var indexN = nextProps.pageIndex,
	        countN = nextProps.count,
	        pageSizeN = nextProps.pageSize;


	    var newState = {},
	        isSetState = false;

	    if (indexN !== pageIndex) {
	      isSetState = true;
	      newState.pageIndex = indexN;
	      this.setGoPage(indexN);
	    }
	    if (pageSizeN !== pageSize || countN !== count) {
	      isSetState = true;
	      newState.pageSize = pageSizeN != null ? pageSizeN : this.state.pageSize;
	      newState.pageCount = this.getPageCount(newState.pageSize, countN);
	    }

	    if (isSetState) {
	      this.setState(newState);
	    }
	  };

	  Pagination.prototype.componentWillMount = function componentWillMount() {
	    var _state = this.state,
	        pageIndex = _state.pageIndex,
	        pageSize = _state.pageSize;

	    //初始化时默认执行刷新

	    this.refresh(pageIndex, pageSize, true);
	  };

	  Pagination.prototype.getPageCount = function getPageCount() {
	    var pageSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.pageSize;
	    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.count;

	    return _getPageCount(count, pageSize);
	  };

	  //切换每页数据数


	  Pagination.prototype.pageSizeChange = function pageSizeChange(pageSize) {
	    this.refresh(this.state.pageIndex, parseInt(pageSize, 10));
	  };

	  //页数文本框失去焦点


	  Pagination.prototype.pageIndexBlur = function pageIndexBlur(e) {
	    if (!utils.RegExp.num.test(e.target.value.trim())) {
	      e.target.value = 1;
	    }
	  };

	  //设置跳转页码


	  Pagination.prototype.setGoPage = function setGoPage(pageIndex) {
	    if (this.refs.pageTxt) {
	      this.refs.pageTxt.value = pageIndex;
	    }
	  };

	  //刷新分页


	  Pagination.prototype.refresh = function refresh() {
	    var pageIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.pageIndex;
	    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.pageSize;
	    var isInit = arguments[2];

	    var props = this.props,
	        pageCount = this.getPageCount(pageSize);

	    //如果当前页大于总页数,则设置总页数为当前页
	    if (pageIndex > pageCount) {
	      pageIndex = pageCount;
	    }
	    if (pageIndex < 1) {
	      pageIndex = 1;
	    }

	    this.setGoPage(pageIndex);
	    this.setState({
	      pageIndex: pageIndex,
	      pageSize: pageSize,
	      pageCount: pageCount
	    });

	    if (props.onChange) {
	      props.onChange(pageIndex, pageSize, isInit);
	    }
	  };

	  //跳转页数


	  Pagination.prototype.goPage = function goPage(e) {
	    this.refresh(parseInt(this.refs.pageTxt.value, 10));
	  };

	  Pagination.prototype.clickBtn = function clickBtn(fn, type) {
	    var _this2 = this;

	    var pageIndex = this.getData('pageIndex'),
	        pageCount = this.getData('pageCount');

	    switch (type) {
	      case 'first':
	        return function () {
	          if (pageIndex != 1) {
	            fn(1);
	          }
	        };
	      case 'prev':
	        return function () {
	          if (pageIndex > 1) {
	            fn(pageIndex - 1);
	          }
	        };
	      case 'next':
	        return function () {
	          if (pageIndex < pageCount) {
	            fn(pageIndex + 1);
	          }
	        };
	      case 'last':
	        return function () {
	          if (pageIndex != pageCount) {
	            fn(pageCount);
	          }
	        };
	      case 'index':
	        return function () {
	          if (_this2.index != pageIndex) {
	            fn(_this2.index);
	          }
	        };
	      default:
	        return function () {
	          return fn();
	        };
	    }
	  };

	  Pagination.prototype.isCurrentPage = function isCurrentPage(no) {
	    return no == this.getData('pageIndex') ? '-c' : '';
	  };

	  Pagination.prototype.showPartPage = function showPartPage(no, type) {
	    var pageCount = this.getData('pageCount');
	    switch (type) {
	      case 1:
	        //当前页码<=4:左侧显示所有+当前页码+右侧2个页码+...+尾页
	        return no <= 4;
	      case 2:
	        //当前页码>4,且<=页面总数(n)-3:首页+...+左侧2个页码+ 当前页码+右侧2个页码+...+尾页
	        return no > 4 && no <= pageCount - 3;
	      case 3:
	        //当前页码>页面总数(n)- 3:首页+...+左侧2个页面+当前页码+右侧显示所有
	        return no > pageCount - 3;
	    }
	  };

	  Pagination.prototype.render = function render() {
	    var _this3 = this;

	    var disabled = ' fj-disabled',
	        state = this.state,
	        props = this.props,
	        extra = {
	      firstDisabled: '',
	      prevDisabled: '',
	      nextDisabled: '',
	      lastDisabled: ''
	    };
	    var className = props.className;

	    //翻页按钮展示逻辑

	    if (state.pageCount <= 1) {
	      //只有一页
	      extra.firstDisabled = disabled;
	      extra.prevDisabled = disabled;
	      extra.nextDisabled = disabled;
	      extra.lastDisabled = disabled;
	    } else if (state.pageIndex == 1) {
	      //首页
	      extra.firstDisabled = disabled;
	      extra.prevDisabled = disabled;
	    } else if (state.pageIndex == state.pageCount) {
	      //尾页
	      extra.nextDisabled = disabled;
	      extra.lastDisabled = disabled;
	    }

	    extra.classes = (0, _classnames2.default)(babelHelpers.defineProperty({
	      'fj-pagn': true
	    }, className, className));
	    extra.wrap = function (c) {
	      return _this3.wrap = c;
	    };

	    return this.template(state, props, this, extra);
	  };

	  return Pagination;
	}(_widget2.default), _class2.defaultProps = {
	  fjType: 'pagn',
	  pageSize: 15, //每页数据数
	  pageSizes: [15, 30, 50], //可选择的每页数据数
	  pageIndex: 1, //当前页码,从1开始
	  pageCountPrefix: '共',
	  pageCountSuffix: '页',
	  count: 0, //数据总数
	  countPrefix: '共',
	  countSuffix: '条数据',
	  sizePrefix: '每页',
	  sizeSuffix: '条',
	  btnGoName: '跳转', //跳转按钮上的字
	  noCount: false, //为true则在无法获取数据总数时使用
	  setPageSize: false, //是否可以设置每页数据数
	  showCount: true, //是否显示数据总数
	  showPageSize: true, //是否显示每页数据数
	  showPageCount: true, //是否显示总页数
	  showRefresh: true,
	  hasPages: true, //是否显示页数链接
	  hasBtnGo: true,
	  emptyText: '没有数据',
	  responsive: false,
	  responsiveDelay: 70,
	  responsiveOnlyWidth: true,
	  defaultResponsiveParam: { //默认响应式参数
	    '(max-width: 480px)': {
	      state: {
	        showCount: false,
	        showPageSize: false,
	        hasPages: false,
	        hasBtnGo: false
	      }
	    },
	    '(min-width: 481px) and (max-width: 768px)': {
	      state: {
	        showCount: false,
	        showPageSize: false,
	        hasPages: true,
	        hasBtnGo: true
	      }
	    },
	    '(min-width: 769px)': {
	      state: {
	        showCount: true,
	        showPageSize: true,
	        hasPages: true,
	        hasBtnGo: true
	      }
	    }
	  }
	}, _temp)) || _class);

	/**
	 * 总页数组件
	 */

	var PageCount = (_dec2 = (0, _nornjReact.registerTmpl)({
	  name: 'fj-PageCount',
	  template: _paginationT2.default.pageCount
	}), _dec2(_class3 = (_temp2 = _class4 = function (_Component) {
	  babelHelpers.inherits(PageCount, _Component);

	  function PageCount() {
	    babelHelpers.classCallCheck(this, PageCount);
	    return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  PageCount.prototype.render = function render() {
	    var _this5 = this;

	    var _props2 = this.props,
	        className = _props2.className,
	        prefix = _props2.prefix,
	        pageCount = _props2.pageCount,
	        count = _props2.count,
	        pageSize = _props2.pageSize,
	        suffix = _props2.suffix,
	        others = babelHelpers.objectWithoutProperties(_props2, ['className', 'prefix', 'pageCount', 'count', 'pageSize', 'suffix']);


	    var classes = (0, _classnames2.default)(babelHelpers.defineProperty({
	      'fj-pagn-part': true
	    }, className, className));

	    //计算总页数
	    if (count != null && pageSize != null) {
	      pageCount = _getPageCount(count, pageSize);
	    }

	    return this.template({
	      props: others,
	      classes: classes,
	      prefix: prefix,
	      pageCount: pageCount,
	      suffix: suffix,
	      wrap: function wrap(c) {
	        return _this5.wrap = c;
	      }
	    });
	  };

	  return PageCount;
	}(_react.Component), _class4.defaultProps = {
	  prefix: '共',
	  suffix: '页'
	}, _temp2)) || _class3);


	Pagination.PageCount = PageCount;

	/**
	 * 数据总数组件
	 */
	var PageDataCount = (_dec3 = (0, _nornjReact.registerTmpl)({
	  name: 'fj-PageDataCount',
	  template: _paginationT2.default.pageDataCount
	}), _dec3(_class5 = (_temp3 = _class6 = function (_Component2) {
	  babelHelpers.inherits(PageDataCount, _Component2);

	  function PageDataCount() {
	    babelHelpers.classCallCheck(this, PageDataCount);
	    return babelHelpers.possibleConstructorReturn(this, _Component2.apply(this, arguments));
	  }

	  PageDataCount.prototype.render = function render() {
	    var _this7 = this;

	    var _props3 = this.props,
	        className = _props3.className,
	        prefix = _props3.prefix,
	        count = _props3.count,
	        suffix = _props3.suffix,
	        others = babelHelpers.objectWithoutProperties(_props3, ['className', 'prefix', 'count', 'suffix']);


	    var classes = (0, _classnames2.default)(babelHelpers.defineProperty({
	      'fj-pagn-part': true
	    }, className, className));

	    return this.template({
	      props: others,
	      classes: classes,
	      prefix: prefix,
	      count: count,
	      suffix: suffix,
	      wrap: function wrap(c) {
	        return _this7.wrap = c;
	      }
	    });
	  };

	  return PageDataCount;
	}(_react.Component), _class6.defaultProps = {
	  prefix: '共',
	  suffix: '条数据'
	}, _temp3)) || _class5);


	Pagination.PageDataCount = PageDataCount;

	/**
	 * 每页展示数量组件
	 */
	var PageSize = (_dec4 = (0, _nornjReact.registerTmpl)({
	  name: 'fj-PageSize',
	  template: _paginationT2.default.pageSize
	}), _dec4(_class7 = (_temp4 = _class8 = function (_Component3) {
	  babelHelpers.inherits(PageSize, _Component3);

	  function PageSize(props) {
	    babelHelpers.classCallCheck(this, PageSize);

	    var _this8 = babelHelpers.possibleConstructorReturn(this, _Component3.call(this, props));

	    _this8.state = {
	      pageSize: null
	    };


	    _this8.state.pageSize = _this8.props.pageSize;
	    _this8.pageSizeChange = _this8.pageSizeChange.bind(_this8);
	    return _this8;
	  }

	  PageSize.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.setState({
	      pageSize: nextProps.pageSize
	    });
	  };

	  PageSize.prototype.pageSizeChange = function pageSizeChange(e) {
	    var props = this.props,
	        pageSize = e.target.value;

	    this.setState({
	      pageSize: pageSize
	    }, function () {
	      if (props.onChange) {
	        props.onChange(pageSize);
	      }
	    });
	  };

	  PageSize.prototype.render = function render() {
	    var _this9 = this;

	    var _props4 = this.props,
	        className = _props4.className,
	        prefix = _props4.prefix,
	        setPageSize = _props4.setPageSize,
	        pageSize = _props4.pageSize,
	        pageSizes = _props4.pageSizes,
	        suffix = _props4.suffix,
	        onChange = _props4.onChange,
	        others = babelHelpers.objectWithoutProperties(_props4, ['className', 'prefix', 'setPageSize', 'pageSize', 'pageSizes', 'suffix', 'onChange']);


	    var classes = (0, _classnames2.default)(babelHelpers.defineProperty({
	      'fj-pagn-part': true
	    }, className, className));

	    return this.template(this.state, {
	      pageSizeChange: this.pageSizeChange,
	      props: others,
	      classes: classes,
	      prefix: prefix,
	      setPageSize: setPageSize,
	      pageSizes: pageSizes,
	      suffix: suffix,
	      wrap: function wrap(c) {
	        return _this9.wrap = c;
	      }
	    });
	  };

	  return PageSize;
	}(_react.Component), _class8.propTypes = {
	  pageSize: _react.PropTypes.number,
	  pageSizes: _react.PropTypes.array,
	  setPageSize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
	  prefix: _react.PropTypes.string,
	  suffix: _react.PropTypes.string,
	  onChange: _react.PropTypes.func
	}, _class8.defaultProps = {
	  pageSize: 15, //每页数据数
	  pageSizes: [15, 30, 50], //可选择的每页数据数
	  setPageSize: false, //是否可以设置每页数据数
	  prefix: '每页',
	  suffix: '条'
	}, _temp4)) || _class7);


	Pagination.PageSize = PageSize;

	exports.default = Pagination;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(17);

	var _reactAddonsUpdate = __webpack_require__(21);

	var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

	var _nornj = __webpack_require__(2);

	var _utils = __webpack_require__(4);

	var utils = babelHelpers.interopRequireWildcard(_utils);

	__webpack_require__(28);

	var win = window;

	var Widget = function (_Component) {
	  babelHelpers.inherits(Widget, _Component);

	  function Widget(props, initialState) {
	    babelHelpers.classCallCheck(this, Widget);

	    var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

	    _this.state = {
	      objId: utils.guid()
	    };


	    babelHelpers.extends(_this.state, initialState);
	    _this.init();
	    return _this;
	  }

	  //Initialize


	  Widget.prototype.init = function init() {
	    this.bindResponsiveEvts();
	  };

	  //绑定响应式事件


	  Widget.prototype.bindResponsiveEvts = function bindResponsiveEvts() {
	    var _this2 = this;

	    var props = this.props;
	    if (!props.responsive) {
	      return;
	    }

	    //页面尺寸改变时触发响应式处理
	    var fn = this.responsiveResize = function () {
	      utils.lazyDo(function () {
	        var isRh = true;

	        //只有在页面宽度改变时执行响应式处理
	        if (props.responsiveOnlyWidth) {
	          var w = utils.pageWidth();

	          //页面宽度和上一次不同
	          if (w !== _this2.globalWidth) {
	            _this2.globalWidth = w;
	            isRh = true;
	          } else {
	            isRh = false;
	          }
	        }

	        if (isRh) {
	          //响应式处理
	          _this2.responsiveHandle();
	        }
	      }, props.responsiveDelay, 'ld_' + props.fjType + '_responsive', _this2);
	    };

	    utils.on('resize', fn, win);

	    //初始化时执行一次响应式处理
	    this.responsiveHandle(true);
	  };

	  //响应式处理


	  Widget.prototype.responsiveHandle = function responsiveHandle(isInit) {
	    var _this3 = this;

	    var props = this.props;
	    var newState = this.state,
	        handlers = [];

	    //处理响应参数
	    [props.defaultResponsiveParam, props.responsiveParam].forEach(function (responsiveParam) {
	      (0, _nornj.each)(responsiveParam, function (rpp, media) {
	        if (utils.mediaQuery(media)) {
	          //符合条件时执行响应式处理
	          if (rpp.state) {
	            //设置响应状态值
	            newState = (0, _reactAddonsUpdate2.default)(newState, { $merge: rpp.state });
	          }

	          if (rpp.preHandler) {
	            //响应前操作
	            var ret = rpp.preHandler.call(_this3, isInit, (0, _reactAddonsUpdate2.default)(newState, { $merge: {} }));
	            if (ret) {
	              newState = ret;
	            }
	          }

	          if (rpp.handler) {
	            //响应后操作
	            handlers[handlers.length] = {
	              handler: rpp.handler,
	              delay: rpp.delay
	            };
	          }
	        }
	      }, false, false);
	    });

	    //执行响应后操作
	    var runHandlers = function runHandlers() {
	      (0, _nornj.each)(handlers, function (h) {
	        var fnH = function fnH() {
	          h.handler.call(_this3, isInit);
	        };

	        if (h.delay) {
	          //可延迟执行时间
	          utils.lazyDo(function () {
	            fnH();
	          }, h.delay);
	        } else {
	          fnH();
	        }
	      }, false, true);
	    };

	    //重置state
	    if (isInit) {
	      //在初始化时需要重新设置state
	      this.state = newState;
	      runHandlers();
	    } else {
	      //非初始化时执行setState
	      this.setState(newState, function () {
	        return runHandlers();
	      });
	    }
	  };

	  Widget.prototype.componentWillUnmount = function componentWillUnmount() {
	    var responsiveResize = this.responsiveResize;

	    //移除响应式事件
	    if (responsiveResize) {
	      utils.off("resize", responsiveResize, win);
	    }
	  };

	  return Widget;
	}(_react.Component);

	exports.default = Widget;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _prodInvariant = __webpack_require__(24),
	    _assign = __webpack_require__(25);

	var keyOf = __webpack_require__(26);
	var invariant = __webpack_require__(27);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}

	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(17);

	var _react2 = babelHelpers.interopRequireDefault(_react);

	var _nornj = __webpack_require__(2);

	var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

	var _utils = __webpack_require__(4);

	(0, _nornj.registerFilter)({
	  fixIconSize: function fixIconSize(val) {
	    return val + (!_utils.isWebkit ? ' fj-fixsize' : '');
	  }
	});

	(0, _nornj.registerExpr)({
	  emptyElem: function emptyElem() {
	    return _react2.default.createElement('div', { className: 'fj-empty-elem' });
	  },
	  cloneElem: function cloneElem(props, options) {
	    return (0, _react.cloneElement)(options.result(), props);
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  pagination: {
	  useString: false,
	  fn1: function anonymous(p1,p2,p3,p4
	/**/) {

	var _expr0 = p2.getData('emptyElem');
	if(!_expr0) _expr0 = p1.exprs['emptyElem'];
	var _dataRefer0 = [
	{ _njOpts: true, ctx: p2, useString: false, exprProps: p4, result: p1.noop }
	];
	p1.throwIf(_expr0, 'emptyElem', 'expr');

	return _expr0.apply(p2, _dataRefer0);
	},
	  fn3: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _params0 = {
	  'className': 'fj-pagn-pageno-c',
	  'title': '第' + (p2.getData('pageIndex')) + '页'
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('pageIndex'));

	return p1.h.apply(null, _compParam0);
	},
	  fn6: function anonymous(p1,p2,p3,p4
	/**/) {
	p2 = p1.newContext(p2, p3);

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = p2.index;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'index', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': p2.index,
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第' + (p2.index) + '页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.index);

	return p1.h.apply(null, _compParam0);
	},
	  fn5: function anonymous(p1,p2,p3,p4
	/**/) {
	var ret = [];

	var _expr0 = p1.exprs['for'];
	var _value0 = p2.getData('pageIndex');

	var _filter0 = p1.filters['+'];
	if (!_filter0) {
	  p1.warn('+', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, 2, { _njOpts: true, ctx: p2 }]);
	}
	var _dataRefer0 = [
	  1,  _value0,{ _njOpts: true, ctx: p2, useString: false, result: p1.exprRet(p1, p2, p1.fn6, p4) }
	];
	p1.throwIf(_expr0, 'for', 'expr');

	ret.push(_expr0.apply(p2, _dataRefer0));

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'next', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': 'ellipsis2',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push('...');

	ret.push(p1.h.apply(null, _compParam0));

	var _type1 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value2 = p2.getData('pageCount');

	var _filter2 = p2.getData('isCurrentPage');
	if(!_filter2) _filter2 = p1.filters['isCurrentPage'];
	if (!_filter2) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value2 = _filter2.apply(p2, [_value2, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value3 = p2.getData('refresh');

	var _filter3 = p2.getData('clickBtn');
	if(!_filter3) _filter3 = p1.filters['clickBtn'];
	if (!_filter3) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value3 = _filter3.apply(p2, [_value3, 'last', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params1 = {
	  'key': p2.getData('pageCount'),
	  'className': 'fj-pagn-pageno' + (_value2),
	  'title': '第' + (p2.getData('pageCount')) + '页',
	  'onClick': _value3
	};
	var _compParam1 = [_type1, _params1];

	_compParam1.push(p2.getData('pageCount'));

	ret.push(p1.h.apply(null, _compParam1));
	return ret;
	},
	  fn8: function anonymous(p1,p2,p3,p4
	/**/) {
	p2 = p1.newContext(p2, p3);

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = p2.index;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'index', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': p2.index,
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第' + (p2.index) + '页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.index);

	return p1.h.apply(null, _compParam0);
	},
	  fn7: function anonymous(p1,p2,p3,p4
	/**/) {
	var ret = [];

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = 1;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'first', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': '1',
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第1页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push('1');

	ret.push(p1.h.apply(null, _compParam0));

	var _type1 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value2 = p2.getData('refresh');

	var _filter2 = p2.getData('clickBtn');
	if(!_filter2) _filter2 = p1.filters['clickBtn'];
	if (!_filter2) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value2 = _filter2.apply(p2, [_value2, 'prev', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params1 = {
	  'key': 'ellipsis1',
	  'onClick': _value2
	};
	var _compParam1 = [_type1, _params1];

	_compParam1.push('...');

	ret.push(p1.h.apply(null, _compParam1));

	var _expr0 = p1.exprs['for'];
	var _value3 = p2.getData('pageIndex');

	var _filter3 = p1.filters['-'];
	if (!_filter3) {
	  p1.warn('-', 'filter');
	}
	else {
	  _value3 = _filter3.apply(p2, [_value3, 2, { _njOpts: true, ctx: p2 }]);
	}
	var _value4 = p2.getData('pageIndex');

	var _filter4 = p1.filters['+'];
	if (!_filter4) {
	  p1.warn('+', 'filter');
	}
	else {
	  _value4 = _filter4.apply(p2, [_value4, 2, { _njOpts: true, ctx: p2 }]);
	}
	var _dataRefer0 = [
	  _value3,  _value4,{ _njOpts: true, ctx: p2, useString: false, result: p1.exprRet(p1, p2, p1.fn8, p4) }
	];
	p1.throwIf(_expr0, 'for', 'expr');

	ret.push(_expr0.apply(p2, _dataRefer0));

	var _type2 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value5 = p2.getData('refresh');

	var _filter5 = p2.getData('clickBtn');
	if(!_filter5) _filter5 = p1.filters['clickBtn'];
	if (!_filter5) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value5 = _filter5.apply(p2, [_value5, 'next', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params2 = {
	  'key': 'ellipsis2',
	  'onClick': _value5
	};
	var _compParam2 = [_type2, _params2];

	_compParam2.push('...');

	ret.push(p1.h.apply(null, _compParam2));

	var _type3 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value6 = p2.getData('pageCount');

	var _filter6 = p2.getData('isCurrentPage');
	if(!_filter6) _filter6 = p1.filters['isCurrentPage'];
	if (!_filter6) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value6 = _filter6.apply(p2, [_value6, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value7 = p2.getData('refresh');

	var _filter7 = p2.getData('clickBtn');
	if(!_filter7) _filter7 = p1.filters['clickBtn'];
	if (!_filter7) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value7 = _filter7.apply(p2, [_value7, 'last', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params3 = {
	  'key': p2.getData('pageCount'),
	  'className': 'fj-pagn-pageno' + (_value6),
	  'title': '第' + (p2.getData('pageCount')) + '页',
	  'onClick': _value7
	};
	var _compParam3 = [_type3, _params3];

	_compParam3.push(p2.getData('pageCount'));

	ret.push(p1.h.apply(null, _compParam3));
	return ret;
	},
	  fn10: function anonymous(p1,p2,p3,p4
	/**/) {
	p2 = p1.newContext(p2, p3);

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = p2.index;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'index', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': p2.index,
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第' + (p2.index) + '页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.index);

	return p1.h.apply(null, _compParam0);
	},
	  fn9: function anonymous(p1,p2,p3,p4
	/**/) {
	var ret = [];

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = 1;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'first', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': '1',
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第1页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push('1');

	ret.push(p1.h.apply(null, _compParam0));

	var _type1 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value2 = p2.getData('refresh');

	var _filter2 = p2.getData('clickBtn');
	if(!_filter2) _filter2 = p1.filters['clickBtn'];
	if (!_filter2) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value2 = _filter2.apply(p2, [_value2, 'prev', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params1 = {
	  'key': 'ellipsis1',
	  'onClick': _value2
	};
	var _compParam1 = [_type1, _params1];

	_compParam1.push('...');

	ret.push(p1.h.apply(null, _compParam1));

	var _expr0 = p1.exprs['for'];
	var _value3 = p2.getData('pageIndex');

	var _filter3 = p1.filters['-'];
	if (!_filter3) {
	  p1.warn('-', 'filter');
	}
	else {
	  _value3 = _filter3.apply(p2, [_value3, 2, { _njOpts: true, ctx: p2 }]);
	}
	var _dataRefer0 = [
	  _value3,  p2.getData('pageCount'),{ _njOpts: true, ctx: p2, useString: false, result: p1.exprRet(p1, p2, p1.fn10, p4) }
	];
	p1.throwIf(_expr0, 'for', 'expr');

	ret.push(_expr0.apply(p2, _dataRefer0));
	return ret;
	},
	  fn12: function anonymous(p1,p2,p3,p4
	/**/) {
	p2 = p1.newContext(p2, p3);

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = p2.index;

	var _filter0 = p2.getData('isCurrentPage');
	if(!_filter0) _filter0 = p1.filters['isCurrentPage'];
	if (!_filter0) {
	  p1.warn('isCurrentPage', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'index', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'key': p2.index,
	  'className': 'fj-pagn-pageno' + (_value0),
	  'title': '第' + (p2.index) + '页',
	  'onClick': _value1
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.index);

	return p1.h.apply(null, _compParam0);
	},
	  fn11: function anonymous(p1,p2,p3,p4
	/**/) {

	var _expr0 = p1.exprs['for'];
	var _dataRefer0 = [
	  1,  p2.getData('pageCount'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn12, p4) }
	];
	p1.throwIf(_expr0, 'for', 'expr');

	return _expr0.apply(p2, _dataRefer0);
	},
	  fn4: function anonymous(p1,p2,p3,p4
	/**/) {

	var _expr0 = p1.exprs['if'];
	var _params0 = null;
	var _paramsE0 = {};

	var _expr1 = p1.exprs['elseif'];
	var _value1 = p2.getData('pageIndex');

	var _filter1 = p2.getData('showPartPage');
	if(!_filter1) _filter1 = p1.filters['showPartPage'];
	if (!_filter1) {
	  p1.warn('showPartPage', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 1, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _dataRefer1 = [
	  _value1,{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.exprRet(p1, p2, p1.fn5, _paramsE0) }
	];
	p1.throwIf(_expr1, 'elseif', 'expr');

	_expr1.apply(p2, _dataRefer1);

	var _expr2 = p1.exprs['elseif'];
	var _value2 = p2.getData('pageIndex');

	var _filter2 = p2.getData('showPartPage');
	if(!_filter2) _filter2 = p1.filters['showPartPage'];
	if (!_filter2) {
	  p1.warn('showPartPage', 'filter');
	}
	else {
	  _value2 = _filter2.apply(p2, [_value2, 2, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _dataRefer2 = [
	  _value2,{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.exprRet(p1, p2, p1.fn7, _paramsE0) }
	];
	p1.throwIf(_expr2, 'elseif', 'expr');

	_expr2.apply(p2, _dataRefer2);

	var _expr3 = p1.exprs['elseif'];
	var _value3 = p2.getData('pageIndex');

	var _filter3 = p2.getData('showPartPage');
	if(!_filter3) _filter3 = p1.filters['showPartPage'];
	if (!_filter3) {
	  p1.warn('showPartPage', 'filter');
	}
	else {
	  _value3 = _filter3.apply(p2, [_value3, 3, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _dataRefer3 = [
	  _value3,{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.exprRet(p1, p2, p1.fn9, _paramsE0) }
	];
	p1.throwIf(_expr3, 'elseif', 'expr');

	_expr3.apply(p2, _dataRefer3);

	_params0 = _paramsE0;
	var _value0 = p2.getData('pageCount');

	var _filter0 = p1.filters['lte'];
	if (!_filter0) {
	  p1.warn('lte', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, 10, { _njOpts: true, ctx: p2 }]);
	}
	var _dataRefer0 = [
	  _value0,{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn11, p4), props: _params0 }
	];
	p1.throwIf(_expr0, 'if', 'expr');

	return _expr0.apply(p2, _dataRefer0);
	},
	  fn13: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _params0 = {
	  'className': 'fj-pagn-info'
	};
	var _compParam0 = [_type0, _params0];

	var _type1 = p1.components['fj-pagecount'] ? p1.components['fj-pagecount'] : 'fj-PageCount';
	var _params1 = {
	  'prefix': p2.getData('pageCountPrefix'),
	  'suffix': p2.getData('pageCountSuffix'),
	  'pageCount': p2.getData('pageCount')
	};
	var _compParam1 = [_type1, _params1];

	_compParam0.push(p1.h.apply(null, _compParam1));

	return p1.h.apply(null, _compParam0);
	},
	  fn14: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _params0 = {
	  'className': 'fj-pagn-info'
	};
	var _compParam0 = [_type0, _params0];

	var _type1 = p1.components['fj-pagedatacount'] ? p1.components['fj-pagedatacount'] : 'fj-PageDataCount';
	var _params1 = {
	  'prefix': p2.getData('countPrefix'),
	  'suffix': p2.getData('countSuffix'),
	  'count': p2.getData('count')
	};
	var _compParam1 = [_type1, _params1];

	_compParam0.push(p1.h.apply(null, _compParam1));

	return p1.h.apply(null, _compParam0);
	},
	  fn15: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _params0 = {
	  'className': 'fj-pagn-info'
	};
	var _compParam0 = [_type0, _params0];

	var _type1 = p1.components['fj-pagesize'] ? p1.components['fj-pagesize'] : 'fj-PageSize';
	var _params1 = {
	  'prefix': p2.getData('sizePrefix'),
	  'suffix': p2.getData('sizeSuffix'),
	  'pageSize': p2.getData('pageSize'),
	  'pageSizes': p2.getData('pageSizes'),
	  'setPageSize': p2.getData('setPageSize'),
	  'onChange': p2.getData('pageSizeChange')
	};
	var _compParam1 = [_type1, _params1];

	_compParam0.push(p1.h.apply(null, _compParam1));

	return p1.h.apply(null, _compParam0);
	},
	  fn16: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _params0 = {
	  'className': 'fj-pagn-txt'
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push('到');

	var _type1 = p1.components['input'] ? p1.components['input'] : 'input';
	var _params1 = {
	  'type': 'text',
	  'ref': 'pageTxt',
	  'defaultValue': p2.getData('pageIndex'),
	  'className': 'fj-form-elem fj-pagn-pageindex',
	  'autoComplete': 'off',
	  'onBlur': p2.getData('pageIndexBlur')
	};
	var _compParam1 = [_type1, _params1];

	_compParam0.push(p1.h.apply(null, _compParam1));

	_compParam0.push('页');

	var _type2 = p1.components['button'] ? p1.components['button'] : 'button';
	var _params2 = {
	  'className': 'fj-btn fj-pagn-btn-go',
	  'type': 'button',
	  'onClick': p2.getData('goPage')
	};
	var _compParam2 = [_type2, _params2];

	_compParam2.push(p2.getData('btnGoName'));

	_compParam0.push(p1.h.apply(null, _compParam2));

	return p1.h.apply(null, _compParam0);
	},
	  fn17: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = 'fj-pagn-btn-refresh';

	var _filter0 = p2.getData('fixIconSize');
	if(!_filter0) _filter0 = p1.filters['fixIconSize'];
	if (!_filter0) {
	  p1.warn('fixIconSize', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params0 = {
	  'className': _value0
	};
	var _compParam0 = [_type0, _params0];

	var _type1 = p1.components['i'] ? p1.components['i'] : 'i';
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params1 = {
	  'className': 'fa fa-refresh',
	  'title': '刷新',
	  'onClick': _value1
	};
	var _compParam1 = [_type1, _params1];

	_compParam0.push(p1.h.apply(null, _compParam1));

	return p1.h.apply(null, _compParam0);
	},
	  fn2: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = {
	  'className': p2.getData('classes'),
	  'style': p1.styleProps(p2.getData('style')),
	  'ref': p2.getData('wrap')
	};
	var _compParam0 = [_type0, _params0];

	var _type1 = p1.components['ul'] ? p1.components['ul'] : 'ul';
	var _params1 = {
	  'className': 'fj-pagn-body'
	};
	var _compParam1 = [_type1, _params1];

	var _type2 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value0 = p2.getData('refresh');

	var _filter0 = p2.getData('clickBtn');
	if(!_filter0) _filter0 = p1.filters['clickBtn'];
	if (!_filter0) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, 'first', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params2 = {
	  'key': 'first',
	  'className': 'fj-pagn-btn' + (p2.getData('firstDisabled')),
	  'title': '首页',
	  'onClick': _value0
	};
	var _compParam2 = [_type2, _params2];

	_compParam2.push('首页');

	_compParam1.push(p1.h.apply(null, _compParam2));

	var _type3 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value1 = p2.getData('refresh');

	var _filter1 = p2.getData('clickBtn');
	if(!_filter1) _filter1 = p1.filters['clickBtn'];
	if (!_filter1) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value1 = _filter1.apply(p2, [_value1, 'prev', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params3 = {
	  'key': 'prev',
	  'className': 'fj-pagn-btn' + (p2.getData('prevDisabled')),
	  'title': '上一页',
	  'onClick': _value1
	};
	var _compParam3 = [_type3, _params3];

	var _type4 = p1.components['i'] ? p1.components['i'] : 'i';
	var _params4 = {
	  'className': 'fa fa-chevron-left'
	};
	var _compParam4 = [_type4, _params4];

	_compParam3.push(p1.h.apply(null, _compParam4));

	_compParam1.push(p1.h.apply(null, _compParam3));

	var _type5 = p1.components['li'] ? p1.components['li'] : 'li';
	var _compParam5 = [_type5, null];

	var _type6 = p1.components['ul'] ? p1.components['ul'] : 'ul';
	var _params5 = {
	  'className': 'fj-pagn-pages'
	};
	var _compParam6 = [_type6, _params5];

	var _expr0 = p1.exprs['if'];
	var _params6 = null;
	var _paramsE0 = {};

	var _expr1 = p1.exprs['else'];
	var _dataRefer1 = [
	{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.exprRet(p1, p2, p1.fn3, _paramsE0) }
	];
	p1.throwIf(_expr1, 'else', 'expr');

	_expr1.apply(p2, _dataRefer1);

	_params6 = _paramsE0;
	var _dataRefer0 = [
	  p2.getData('hasPages'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn4, p4), props: _params6 }
	];
	p1.throwIf(_expr0, 'if', 'expr');

	_compParam6.push(_expr0.apply(p2, _dataRefer0));

	_compParam5.push(p1.h.apply(null, _compParam6));

	_compParam1.push(p1.h.apply(null, _compParam5));

	var _type7 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value2 = p2.getData('refresh');

	var _filter2 = p2.getData('clickBtn');
	if(!_filter2) _filter2 = p1.filters['clickBtn'];
	if (!_filter2) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value2 = _filter2.apply(p2, [_value2, 'next', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params7 = {
	  'key': 'next',
	  'className': 'fj-pagn-btn' + (p2.getData('nextDisabled')),
	  'title': '下一页',
	  'onClick': _value2
	};
	var _compParam7 = [_type7, _params7];

	var _type8 = p1.components['i'] ? p1.components['i'] : 'i';
	var _params8 = {
	  'className': 'fa fa-chevron-right'
	};
	var _compParam8 = [_type8, _params8];

	_compParam7.push(p1.h.apply(null, _compParam8));

	_compParam1.push(p1.h.apply(null, _compParam7));

	var _type9 = p1.components['li'] ? p1.components['li'] : 'li';
	var _value3 = p2.getData('refresh');

	var _filter3 = p2.getData('clickBtn');
	if(!_filter3) _filter3 = p1.filters['clickBtn'];
	if (!_filter3) {
	  p1.warn('clickBtn', 'filter');
	}
	else {
	  _value3 = _filter3.apply(p2, [_value3, 'last', { _njOpts: true, ctx: p2, useString: false }]);
	}
	var _params9 = {
	  'key': 'last',
	  'className': 'fj-pagn-btn' + (p2.getData('lastDisabled')),
	  'title': '末页',
	  'onClick': _value3
	};
	var _compParam9 = [_type9, _params9];

	_compParam9.push('末页');

	_compParam1.push(p1.h.apply(null, _compParam9));

	var _expr2 = p1.exprs['if'];
	var _dataRefer2 = [
	  p2.getData('showPageCount'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn13, p4) }
	];
	p1.throwIf(_expr2, 'if', 'expr');

	_compParam1.push(_expr2.apply(p2, _dataRefer2));

	var _expr3 = p1.exprs['if'];
	var _dataRefer3 = [
	  p2.getData('showCount'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn14, p4) }
	];
	p1.throwIf(_expr3, 'if', 'expr');

	_compParam1.push(_expr3.apply(p2, _dataRefer3));

	var _expr4 = p1.exprs['if'];
	var _dataRefer4 = [
	  p2.getData('showPageSize'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn15, p4) }
	];
	p1.throwIf(_expr4, 'if', 'expr');

	_compParam1.push(_expr4.apply(p2, _dataRefer4));

	var _expr5 = p1.exprs['if'];
	var _dataRefer5 = [
	  p2.getData('hasBtnGo'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn16, p4) }
	];
	p1.throwIf(_expr5, 'if', 'expr');

	_compParam1.push(_expr5.apply(p2, _dataRefer5));

	var _expr6 = p1.exprs['if'];
	var _dataRefer6 = [
	  p2.getData('showRefresh'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn17, p4) }
	];
	p1.throwIf(_expr6, 'if', 'expr');

	_compParam1.push(_expr6.apply(p2, _dataRefer6));

	_compParam0.push(p1.h.apply(null, _compParam1));

	return p1.h.apply(null, _compParam0);
	},
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _expr0 = p1.exprs['if'];
	var _params0 = null;
	var _paramsE0 = {};

	var _expr1 = p1.exprs['else'];
	var _dataRefer1 = [
	{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.exprRet(p1, p2, p1.fn1, _paramsE0) }
	];
	p1.throwIf(_expr1, 'else', 'expr');

	_expr1.apply(p2, _dataRefer1);

	_params0 = _paramsE0;
	var _value0 = p2.getData('count');

	var _filter0 = p1.filters['gte'];
	if (!_filter0) {
	  p1.warn('gte', 'filter');
	}
	else {
	  _value0 = _filter0.apply(p2, [_value0, 1, { _njOpts: true, ctx: p2 }]);
	}
	var _dataRefer0 = [
	  _value0,{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn2, p4), props: _params0 }
	];
	p1.throwIf(_expr0, 'if', 'expr');

	return _expr0.apply(p2, _dataRefer0);
	}
	},
	  pageCount: {
	  useString: false,
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('prefix'));

	var _type1 = p1.components['span'] ? p1.components['span'] : 'span';
	var _compParam1 = [_type1, null];

	_compParam1.push(p2.getData('pageCount'));

	_compParam0.push(p1.h.apply(null, _compParam1));

	_compParam0.push(p2.getData('suffix'));

	return p1.h.apply(null, _compParam0);
	}
	},
	  pageDataCount: {
	  useString: false,
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('prefix'));

	var _type1 = p1.components['span'] ? p1.components['span'] : 'span';
	var _compParam1 = [_type1, null];

	_compParam1.push(p2.getData('count'));

	_compParam0.push(p1.h.apply(null, _compParam1));

	_compParam0.push(p2.getData('suffix'));

	return p1.h.apply(null, _compParam0);
	}
	},
	  pageSize: {
	  useString: false,
	  fn1: function anonymous(p1,p2,p3,p4
	/**/) {

	return p2.getData('pageSize');
	},
	  fn3: function anonymous(p1,p2,p3,p4
	/**/) {
	p2 = p1.newContext(p2, p3);

	var _type0 = p1.components['option'] ? p1.components['option'] : 'option';
	var _params0 = {
	  'key': p2.index,
	  'value': p2.data[0]
	};
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.data[0]);

	return p1.h.apply(null, _compParam0);
	},
	  fn2: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['select'] ? p1.components['select'] : 'select';
	var _params0 = {
	  'className': 'fj-form-elem fj-pagn-pagesize',
	  'value': p2.getData('pageSize'),
	  'onChange': p2.getData('pageSizeChange')
	};
	var _compParam0 = [_type0, _params0];

	var _expr0 = p1.exprs['each'];
	var _dataRefer0 = [
	  p2.getData('pageSizes'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn3, p4) }
	];
	p1.throwIf(_expr0, 'each', 'expr');

	_compParam0.push(_expr0.apply(p2, _dataRefer0));

	return p1.h.apply(null, _compParam0);
	},
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('prefix'));

	var _expr1 = p1.exprs['if'];
	var _params1 = null;
	var _paramsE1 = {};

	var _expr2 = p1.exprs['else'];
	var _dataRefer2 = [
	{ _njOpts: true, ctx: p2, exprProps: _paramsE1, result: p1.exprRet(p1, p2, p1.fn1, _paramsE1) }
	];
	p1.throwIf(_expr2, 'else', 'expr');

	_expr2.apply(p2, _dataRefer2);

	_params1 = _paramsE1;
	var _dataRefer1 = [
	  p2.getData('setPageSize'),{ _njOpts: true, ctx: p2, useString: p1.useString, result: p1.exprRet(p1, p2, p1.fn2, p4), props: _params1 }
	];
	p1.throwIf(_expr1, 'if', 'expr');

	_compParam0.push(_expr1.apply(p2, _dataRefer1));

	_compParam0.push(p2.getData('suffix'));

	return p1.h.apply(null, _compParam0);
	}
	}
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _grid = __webpack_require__(31);

	Object.keys(_grid).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _grid[key];
	    }
	  });
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ClearFix = exports.Col = exports.RowRight = exports.RowLeft = exports.Row = undefined;

	var _dec, _class, _dec2, _class2, _dec3, _class3, _dec4, _class4, _dec5, _class5;

	var _react = __webpack_require__(17);

	var _nornj = __webpack_require__(2);

	var _nornjReact = __webpack_require__(18);

	var _classnames = __webpack_require__(19);

	var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

	var _gridT = __webpack_require__(32);

	var _gridT2 = babelHelpers.interopRequireDefault(_gridT);

	var templateRow = (0, _nornj.compileH)(_gridT2.default.row);

	/**
	 * Grid row
	 */
	var Row = (_dec = (0, _nornjReact.registerTmpl)('fj-Row'), _dec(_class = function (_Component) {
	  babelHelpers.inherits(Row, _Component);

	  function Row() {
	    babelHelpers.classCallCheck(this, Row);
	    return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  Row.prototype.render = function render() {
	    var _this2 = this;

	    var _props = this.props,
	        className = _props.className,
	        style = _props.style,
	        left = _props.left,
	        right = _props.right,
	        children = _props.children,
	        others = babelHelpers.objectWithoutProperties(_props, ['className', 'style', 'left', 'right', 'children']);


	    var classes = (0, _classnames2.default)(babelHelpers.defineProperty({
	      'fj-row': true
	    }, className, className));

	    var styles = {};
	    if (style) {
	      babelHelpers.extends(styles, style);
	    }
	    if (left) {
	      styles.marginLeft = parseInt(left, 10);
	    }
	    if (right) {
	      styles.marginRight = parseInt(right, 10);
	    }

	    return templateRow({
	      props: others,
	      classes: classes,
	      styles: styles,
	      children: children,
	      wrap: function wrap(c) {
	        return _this2.wrap = c;
	      }
	    });
	  };

	  return Row;
	}(_react.Component)) || _class);


	function _createRowRender(context, compClass) {
	  return function () {
	    var _classNames2,
	        _this3 = this;

	    var _props2 = this.props,
	        className = _props2.className,
	        style = _props2.style,
	        width = _props2.width,
	        children = _props2.children,
	        others = babelHelpers.objectWithoutProperties(_props2, ['className', 'style', 'width', 'children']);


	    var classes = (0, _classnames2.default)((_classNames2 = {}, babelHelpers.defineProperty(_classNames2, compClass, true), babelHelpers.defineProperty(_classNames2, className, className), _classNames2));

	    var styles = {};
	    if (style) {
	      babelHelpers.extends(styles, style);
	    }
	    if (width) {
	      styles.width = parseInt(width, 10);
	    }

	    return templateRow({
	      props: others,
	      classes: classes,
	      styles: styles,
	      children: children,
	      wrap: function wrap(c) {
	        return _this3.wrap = c;
	      }
	    });
	  }.bind(context);
	}

	/**
	 * Grid row left container
	 */
	var RowLeft = (_dec2 = (0, _nornjReact.registerTmpl)('fj-RowLeft'), _dec2(_class2 = function (_Component2) {
	  babelHelpers.inherits(RowLeft, _Component2);

	  function RowLeft(props) {
	    babelHelpers.classCallCheck(this, RowLeft);

	    var _this4 = babelHelpers.possibleConstructorReturn(this, _Component2.call(this, props));

	    _this4.render = _createRowRender(_this4, 'fj-row-left');
	    return _this4;
	  }

	  return RowLeft;
	}(_react.Component)) || _class2);

	/**
	 * Grid row right container
	 */

	var RowRight = (_dec3 = (0, _nornjReact.registerTmpl)('fj-RowRight'), _dec3(_class3 = function (_Component3) {
	  babelHelpers.inherits(RowRight, _Component3);

	  function RowRight(props) {
	    babelHelpers.classCallCheck(this, RowRight);

	    var _this5 = babelHelpers.possibleConstructorReturn(this, _Component3.call(this, props));

	    _this5.render = _createRowRender(_this5, 'fj-row-right');
	    return _this5;
	  }

	  return RowRight;
	}(_react.Component)) || _class3);

	/**
	 * Grid col
	 */

	var Col = (_dec4 = (0, _nornjReact.registerTmpl)({
	  name: 'fj-Col',
	  template: _gridT2.default.col
	}), _dec4(_class4 = function (_Component4) {
	  babelHelpers.inherits(Col, _Component4);

	  function Col() {
	    babelHelpers.classCallCheck(this, Col);
	    return babelHelpers.possibleConstructorReturn(this, _Component4.apply(this, arguments));
	  }

	  Col.prototype.render = function render() {
	    var _classNames3,
	        _this7 = this;

	    var _props3 = this.props,
	        className = _props3.className,
	        l = _props3.l,
	        m = _props3.m,
	        s = _props3.s,
	        xs = _props3.xs,
	        right = _props3.right,
	        left = _props3.left,
	        shift = _props3.shift,
	        rightM = _props3.rightM,
	        leftM = _props3.leftM,
	        shiftM = _props3.shiftM,
	        rightS = _props3.rightS,
	        leftS = _props3.leftS,
	        shiftS = _props3.shiftS,
	        rightXs = _props3.rightXs,
	        leftXs = _props3.leftXs,
	        shiftXs = _props3.shiftXs,
	        children = _props3.children,
	        others = babelHelpers.objectWithoutProperties(_props3, ['className', 'l', 'm', 's', 'xs', 'right', 'left', 'shift', 'rightM', 'leftM', 'shiftM', 'rightS', 'leftS', 'shiftS', 'rightXs', 'leftXs', 'shiftXs', 'children']);


	    var classes = (0, _classnames2.default)((_classNames3 = {}, babelHelpers.defineProperty(_classNames3, 'fj-col' + l, l != null), babelHelpers.defineProperty(_classNames3, 'fj-col-m' + m, m != null), babelHelpers.defineProperty(_classNames3, 'fj-col-s' + s, s != null), babelHelpers.defineProperty(_classNames3, 'fj-col-xs' + xs, xs != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right' + right, right != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left' + left, left != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift' + shift, shift != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-m' + rightM, rightM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-m' + leftM, leftM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-m' + shiftM, shiftM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-s' + rightS, rightS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-s' + leftS, leftS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-s' + shiftS, shiftS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-xs' + rightXs, rightXs != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-xs' + leftXs, leftXs != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-xs' + shiftXs, shiftXs != null), babelHelpers.defineProperty(_classNames3, className, className), _classNames3));

	    return this.template({
	      props: others,
	      classes: classes,
	      children: children,
	      wrap: function wrap(c) {
	        return _this7.wrap = c;
	      }
	    });
	  };

	  return Col;
	}(_react.Component)) || _class4);

	/**
	 * Clear the float style
	 */

	var ClearFix = (_dec5 = (0, _nornjReact.registerTmpl)({
	  name: 'fj-ClearFix',
	  template: _gridT2.default.clearFix
	}), _dec5(_class5 = function (_Component5) {
	  babelHelpers.inherits(ClearFix, _Component5);

	  function ClearFix() {
	    babelHelpers.classCallCheck(this, ClearFix);
	    return babelHelpers.possibleConstructorReturn(this, _Component5.apply(this, arguments));
	  }

	  ClearFix.prototype.render = function render() {
	    var _classNames4,
	        _this9 = this;

	    var _props4 = this.props,
	        className = _props4.className,
	        l = _props4.l,
	        m = _props4.m,
	        s = _props4.s,
	        xs = _props4.xs,
	        others = babelHelpers.objectWithoutProperties(_props4, ['className', 'l', 'm', 's', 'xs']);


	    var classes = (0, _classnames2.default)((_classNames4 = {}, babelHelpers.defineProperty(_classNames4, 'fj-clearfix', l != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-m', m != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-s', s != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-xs', xs != null), babelHelpers.defineProperty(_classNames4, className, className), _classNames4));

	    return this.template({
	      props: others,
	      classes: classes,
	      wrap: function wrap(c) {
	        return _this9.wrap = c;
	      }
	    });
	  };

	  return ClearFix;
	}(_react.Component)) || _class5);
	exports.Row = Row;
	exports.RowLeft = RowLeft;
	exports.RowRight = RowRight;
	exports.Col = Col;
	exports.ClearFix = ClearFix;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  row: {
	  useString: false,
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['style'] = p1.styleProps(p2.getData('styles'));
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('children'));

	return p1.h.apply(null, _compParam0);
	}
	},
	  col: {
	  useString: false,
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	_compParam0.push(p2.getData('children'));

	return p1.h.apply(null, _compParam0);
	}
	},
	  clearFix: {
	  useString: false,
	  main: function anonymous(p1,p2,p3,p4
	/**/) {

	var _type0 = p1.components['div'] ? p1.components['div'] : 'div';
	var _params0 = null;
	var _paramsE0 = {};

	var _expr0 = p1.exprs['spread'];
	var _dataRefer0 = [
	  p2.getData('props'),{ _njOpts: true, ctx: p2, exprProps: _paramsE0, result: p1.noop }
	];
	p1.throwIf(_expr0, 'spread', 'expr');

	_expr0.apply(p2, _dataRefer0);

	_params0 = _paramsE0;
	_params0['className'] = p2.getData('classes');
	_params0['ref'] = p2.getData('wrap');
	var _compParam0 = [_type0, _params0];

	return p1.h.apply(null, _compParam0);
	}
	}
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _gesture = __webpack_require__(34);

	Object.keys(_gesture).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _gesture[key];
	    }
	  });
	});

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(17);

	var _nornjReact = __webpack_require__(18);

	var _browsers = __webpack_require__(8);

	var _delayOperate = __webpack_require__(9);

	var _domEvent = __webpack_require__(10);

	var _common = __webpack_require__(6);

	var Gesture = (_dec = (0, _nornjReact.registerTmpl)({
	  name: 'fj-Gesture',
	  template: '<#cloneElem {props}>{children}</#cloneElem>'
	}), _dec(_class = (_temp = _class2 = function (_Component) {
	  babelHelpers.inherits(Gesture, _Component);

	  function Gesture(props) {
	    babelHelpers.classCallCheck(this, Gesture);

	    var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

	    if (_browsers.isMobile) {
	      (0, _common.bindThis)(_this, ['touchStart', 'touchMove', 'touchEnd']);

	      _this.startPosX = 0; //起始触摸点x轴坐标
	      _this.lastPosX = 0; //最后触摸点x轴坐标
	      _this.startPosY = 0; //起始触摸点y轴坐标
	      _this.lastPosY = 0; //最后触摸点y轴坐标
	      _this.dx = 0; //触摸x轴移动距离
	      _this.dy = 0; //触摸y轴移动距离
	      _this.lastPinchTime = 0; //最后缩放时间
	      _this.lastScale = 0; //最后一次缩放的比例值
	      _this.lastPanTime = 0; //最后一次平移时间
	      _this.lastRotateTime = 0; //最后旋转时间
	      _this.lastRotation = 0; //最后一次旋转的角度变化值
	      _this.preventScroll = props.preventScroll;

	      //滚动条所在元素
	      if (props.onTapHold) {
	        if (props.scrollElemV) {
	          _this.scrollElemV = props.scrollElemV;
	        } else {
	          _this.scrollElemV = document.body;
	        }
	        if (!props.scrollElemH) {
	          _this.scrollElemH = _this.scrollElemV;
	        }
	      }

	      //是否支持摇动
	      _this.supportShake = 'DeviceMotionEvent' in window;
	      if (_this.supportShake && _this.props.onShake) {
	        //记录上一次检测的摇动值
	        (0, _common.bindThis)(_this, ['deviceMotion']);

	        _this.lastShakeX = 0;
	        _this.lastShakeY = 0;
	        _this.lastShakeZ = 0;
	        _this.lastTime = 0;
	        _this.freezeShake = false;

	        (0, _domEvent.on)("devicemotion", _this.deviceMotion, window);
	      }
	    }
	    return _this;
	  }

	  //触摸开始


	  Gesture.prototype.touchStart = function touchStart(e) {
	    var _this2 = this;

	    var props = this.props,
	        posAll = this.getTouchPos(e),
	        pos = posAll[0],
	        x = pos[0],
	        y = pos[1],
	        tl = posAll.length,
	        ret = { e: e, x: x, y: y, fingers: tl },
	        scrollElemV = null,
	        scrollElemH = null;

	    //记录触摸手指数
	    this.tapFingers = tl;

	    //起始与结束点坐标
	    this.startPosX = x;
	    this.lastPosX = x;
	    this.startPosY = y;
	    this.lastPosY = y;

	    if (tl == 1) {
	      //各参数初始化
	      this.duration = Date.now();
	      this.isScroll = null;
	      this.scale = null;
	      this.lastScale = 0;
	      this.isPinch = false;
	      this.rotation = null;
	      this.lastRotation = 0;
	      this.isRotate = false;
	      this.dx = 0;
	      this.dy = 0;

	      //如注册长按事件则需检测滚动条位
	      if (props.onTapHold) {
	        this.scrollElemTop = this.scrollElemV.scrollTop;
	        this.scrollElemLeft = this.scrollElemH.scrollLeft;
	      }

	      props.onTapStart && props.onTapStart.call(this, ret);

	      //触摸交互时长大于阀值并没有发生位移,则视为长按
	      if (props.onTapHold) {
	        this.timeoutH = (0, _delayOperate.lazyDo)(function () {
	          if (!_this2.isPinch && !_this2.isRotate && _this2.dx <= props.holdLimitX && _this2.dy <= props.holdLimitY && _this2.scrollElemTop == _this2.scrollElemV.scrollTop && _this2.scrollElemLeft == _this2.scrollElemH.scrollLeft) {
	            ret.fingers = _this2.tapFingers;
	            props.onTapHold.call(_this2, ret);
	          }
	        }, props.durationLimitH);
	      }
	    } else {
	      if (tl == 2) {
	        var pos1 = posAll[0],
	            pos2 = posAll[1];

	        //计算两指触摸点间初始距离
	        this.fingerDistS = this.getPosDistance(pos1, pos2);

	        //计算两指触摸点间初始角度
	        this.fingerRotateS = this.getPosAngle(pos1, pos2);
	      }

	      //多点tapStart事件
	      if (props.multiTapStart) {
	        props.onTapStart && props.onTapStart.call(this, ret);
	      }
	    }
	  };

	  //触摸移动


	  Gesture.prototype.touchMove = function touchMove(e) {
	    var props = this.props,
	        posAll = this.getTouchPos(e),
	        pos = posAll[0],
	        x = pos[0],
	        y = pos[1],
	        mx = props.scrollMaxX,
	        my = props.scrollMaxY,
	        ix = props.scrollMinX,
	        iy = props.scrollMinY,
	        tl = posAll.length,
	        twoFingers = tl === 2 && (props.onPinch || props.onRotate);

	    this.lastPosX = x;
	    this.dx = this.lastPosX - this.startPosX;
	    this.lastPosY = y;
	    this.dy = this.lastPosY - this.startPosY;

	    if (twoFingers) {
	      //缩放时禁止默认滚动
	      e.preventDefault();
	    }

	    if (this.isScroll) {
	      //如果在上次触发的touchMove事件中执行了滚动,则本次也视作为滚动
	      return;
	    }
	    if (this.isScroll == null) {
	      if (mx != null && Math.abs(this.dy) >= iy && Math.abs(this.dx) <= mx) {
	        //如果垂直发生过位移且大于阀值,并且水平位移在滚动阀值内则视为滚动
	        this.isScroll = true;
	        return;
	      }
	      if (my != null && Math.abs(this.dx) >= ix && Math.abs(this.dy) <= my) {
	        //如果水平发生过位移且大于阀值,并且垂直位移在滚动阀值内则视为滚动
	        this.isScroll = true;
	        return;
	      }
	    }

	    //如果非滚动,则本次触摸一直为平移
	    if (this.preventScroll) {
	      e.preventDefault(); //阻止默认滚动
	    }
	    this.isScroll = false;

	    //移动方向
	    var dir = this.getMoveDir(),
	        curTime = Date.now();

	    if (twoFingers) {
	      var diffTime = curTime - this.lastPinchTime;

	      //双指缩放
	      if (diffTime > props.durationPinch) {
	        //每隔一定时间检测
	        this.lastPinchTime = curTime;
	        this.isPinch = true;

	        //计算缩放比例
	        var scale = this.getPosScale(posAll[0], posAll[1]),
	            dirS = null;

	        if (scale != this.lastScale) {
	          //比例有变化时才执行缩放
	          this.lastScale = scale;

	          if (scale < 1 && scale % 1 < 1 - props.scalePinchClose || scale > 1 && scale % 1 > props.scalePinchOpen) {
	            //大于缩放阀值时执行事件
	            dirS = scale < 1 ? -1 : 1;
	            this.scale = scale;

	            this.preventScroll = true; //缩放时阻止滚动
	            props.onPinch && props.onPinch.call(this, { e: e, scale: scale, dir: dirS });
	          }
	        }
	      }

	      diffTime = curTime - this.lastRotateTime;

	      //双指旋转
	      if (diffTime > props.durationRotate) {
	        //每隔一定时间检测
	        this.lastRotateTime = curTime;
	        this.isRotate = true;

	        //计算旋转角度变化值
	        var rotation = this.getPosRotation(posAll[0], posAll[1]),
	            _dirS = null;

	        if (rotation != this.lastRotation) {
	          //旋转角度有变化时才执行旋转
	          this.lastRotation = rotation;

	          if (rotation < 1 && -1 * rotation > props.rotationCcw || rotation > 1 && rotation > props.rotationCw) {
	            //大于旋转阀值时执行事件
	            _dirS = rotation < 1 ? -1 : 1;
	            this.rotation = rotation;

	            this.preventScroll = true; //缩放时阻止滚动
	            props.onRotate && props.onRotate.call(this, { e: e, rotation: rotation, dir: _dirS });
	          }
	        }
	      }
	    }

	    //平移
	    if (props.durationPan == null || curTime - this.lastPanTime > props.durationPan) {
	      this.lastPanTime = curTime;
	      props.onPan && props.onPan.call(this, { e: e, x: x, y: y, dx: this.dx, dy: this.dy, dirX: dir[0], dirY: dir[1], fingers: tl, touchId: this.getTouchIndex(e) });
	    }
	  };

	  //触摸结束


	  Gesture.prototype.touchEnd = function touchEnd(e) {
	    var props = this.props,
	        isScroll = this.isScroll;

	    if (e.touches.length > 0) {
	      return;
	    }

	    //清除长按检测
	    if (this.timeoutH) {
	      clearTimeout(this.timeoutH);
	      this.timeoutH = null;
	    }

	    if (this.isScroll) {
	      props.onScrollEnd && props.onScrollEnd.call(this, { e: e });
	      return;
	    }

	    var dir = this.getMoveDir(),
	        //移动方向
	    ret = { e: e, x: this.lastPosX, y: this.lastPosY, dx: this.dx, dy: this.dy, dirX: dir[0], dirY: dir[1], fingers: this.tapFingers },
	        //返回参数对象
	    gtH = Math.abs(this.dx) > props.distanceLimitH,
	        gtV = Math.abs(this.dy) > props.distanceLimitV,
	        cTime = Date.now(),
	        duration = cTime - this.duration;

	    //如触摸交互时长小于阀值则视作扫动
	    if (duration <= props.durationLimitS) {
	      var dirS = '';
	      if (gtH) {
	        if (dir[0] == 'l') {
	          dirS += 'l';
	          props.onSwipeLeft && props.onSwipeLeft.call(this, ret);
	        } else {
	          dirS += 'r';
	          props.onSwipeRight && props.onSwipeRight.call(this, ret);
	        }
	      }
	      if (gtV) {
	        if (dir[1] == 't') {
	          dirS += 't';
	          props.onSwipeTop && props.onSwipeTop.call(this, ret);
	        } else {
	          dirS += 'b';
	          props.onSwipeBottom && props.onSwipeBottom.call(this, ret);
	        }
	      }
	      if (gtH || gtV) {
	        ret.dirS = dirS; //扫动方向
	        props.onSwipe && props.onSwipe.call(this, ret);
	      }
	    }

	    //如果触摸交互时长小于阀值且没有发生位移,则视为轻触
	    if (duration <= props.tapDuration && this.dx <= props.tapLimitX && this.dy <= props.tapLimitY) {
	      if (props.preventClick) {
	        e.preventDefault();
	      }

	      props.onTap && props.onTap.call(this, ret);
	    }

	    //是否缩放过
	    if (this.scale != null) {
	      ret.scale = this.scale;
	    }

	    //是否旋转过
	    if (this.rotation != null) {
	      ret.rotation = this.rotation;
	    }

	    props.onTapEnd && props.onTapEnd.call(this, ret);
	  };

	  //设备摇动侦测


	  Gesture.prototype.deviceMotion = function deviceMotion(e) {
	    var _this3 = this;

	    var props = this.props,
	        acceleration = e.accelerationIncludingGravity,
	        //获取含重力的加速度
	    curTime = Date.now(),
	        diffTime = curTime - this.lastTime,
	        //获取当前时间和最后检测时间间隔
	    ret = { e: e };

	    //每隔一定时间检测一次
	    if (diffTime > props.shakeDuration) {
	      this.lastTime = curTime;
	      var x = acceleration.x,
	          y = acceleration.y,
	          z = acceleration.z,
	          speed = Math.abs(x + y + z - this.lastShakeX - this.lastShakeY - this.lastShakeZ) / diffTime;

	      if (speed > props.shakeLimit) {
	        //摇动速度超过阀值
	        if (!this.freezeShake) {
	          this.freezeShake = true; //为防止同一次摇动中多次摇中,此处设置如果摇中一次,则本次摇动中不可能再次摇中
	          props.onShake(ret);
	        }

	        (0, _delayOperate.lazyDo)(function () {
	          _this3.freezeShake = false;
	        }, props.shakeFreezeDelay, 'gesture_shake', this);
	      }

	      this.lastShakeX = x;
	      this.lastShakeY = y;
	      this.lastShakeZ = z;
	    }
	  };

	  //计算触摸点坐标值


	  Gesture.prototype.getTouchPos = function getTouchPos(e) {
	    var touches = e.touches,
	        osLeft = this.wrapper.offsetLeft,
	        osTop = this.wrapper.offsetTop,
	        ts = null,
	        ret = [];

	    for (var i = 0, l = touches.length; i < l; i++) {
	      ts = touches[i];
	      ret[ret.length] = [ts.pageX - osLeft, ts.pageY - osTop]; //参数依次为:x轴坐标、y轴坐标、触摸点唯一标识
	    }

	    return ret;
	  };

	  //计算触摸移动方向


	  Gesture.prototype.getMoveDir = function getMoveDir() {
	    var dirX = void 0,
	        dirY = void 0;
	    if (this.dx > 0) {
	      dirX = "r";
	    } else {
	      dirX = "l";
	    }
	    if (this.dy > 0) {
	      dirY = "b";
	    } else {
	      dirY = "t";
	    }

	    return [dirX, dirY];
	  };

	  //获取触摸点索引


	  Gesture.prototype.getTouchIndex = function getTouchIndex(e) {
	    var targetTouch = e.targetTouches[0],
	        touches = e.touches;

	    for (var i = 0, l = touches.length; i < l; i++) {
	      if (touches[i].identifier === targetTouch.identifier) {
	        return i;
	      }
	    }
	  };

	  //计算两点间距离


	  Gesture.prototype.getPosDistance = function getPosDistance(pos1, pos2) {
	    var x = pos1[0] - pos2[0],
	        y = pos1[1] - pos2[1];

	    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	  };

	  //计算缩放比例


	  Gesture.prototype.getPosScale = function getPosScale(pos1, pos2) {
	    return this.getPosDistance(pos1, pos2) / this.fingerDistS;
	  };

	  //计算两点间角度


	  Gesture.prototype.getPosAngle = function getPosAngle(pos1, pos2) {
	    var x = pos1[0] - pos2[0],
	        y = pos1[1] - pos2[1];

	    return Math.atan2(y, x) * 180 / Math.PI;
	  };

	  //计算旋转角度


	  Gesture.prototype.getPosRotation = function getPosRotation(pos1, pos2) {
	    return this.getPosAngle(pos1, pos2) - this.fingerRotateS;
	  };

	  Gesture.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (_browsers.isMobile && this.supportShake && this.props.onShake) {
	      (0, _domEvent.off)("devicemotion", this.deviceMotion, window);
	    }
	  };

	  Gesture.prototype.render = function render() {
	    var _this4 = this;

	    return this.template({
	      props: _browsers.isMobile ? {
	        ref: function ref(c) {
	          return _this4.wrapper = c;
	        },
	        onTouchStart: this.touchStart,
	        onTouchMove: this.touchMove,
	        onTouchEnd: this.touchEnd,
	        onTouchCancel: this.touchEnd
	      } : null
	    }, this.props);
	  };

	  return Gesture;
	}(_react.Component), _class2.propTypes = {
	  onTapStart: _react.PropTypes.func, //触摸开始
	  onTap: _react.PropTypes.func, //轻触
	  onPan: _react.PropTypes.func, //平移
	  onTapEnd: _react.PropTypes.func, //触摸结束
	  onTapHold: _react.PropTypes.func, //长按
	  onSwipe: _react.PropTypes.func, //扫动
	  onSwipeLeft: _react.PropTypes.func, //左扫动
	  onSwipeRight: _react.PropTypes.func, //右扫动
	  onSwipeTop: _react.PropTypes.func, //上扫动
	  onSwipeBottom: _react.PropTypes.func, //下扫动
	  onScrollEnd: _react.PropTypes.func, //滚动结束
	  onPinch: _react.PropTypes.func, //双指缩放
	  onRotate: _react.PropTypes.func, //双指旋转
	  onShake: _react.PropTypes.func //摇动
	}, _class2.defaultProps = {
	  multiTapStart: false, //是否执行多点触控的tapStart事件
	  preventScroll: true, //是否阻止滚动
	  preventClick: true, //是否阻止点击
	  scrollElemV: null, //滚动条所在元素(纵向)
	  scrollElemH: null, //滚动条所在元素(横向)
	  durationLimitH: 300, //触摸交互时间如果长于该值则视作按住
	  durationLimitS: 150, //触摸交互时间如果长于该值则不视作扫动
	  distanceLimitH: 30, //扫动水平位移必须大于该值
	  distanceLimitV: 75, //扫动垂直位移必须大于该值
	  scrollMaxX: null, //纵向平移时如x轴位移不大于该值则视为视为满足滚动条件之一,如为null则不发生滚动
	  scrollMaxY: null, //横向平移时如y轴位移不大于该值则视为视为满足滚动条件之一,如为null则不发生滚动
	  scrollMinX: 10, //横向平移时如x轴位移不小于该值则视为视为满足滚动条件之一,另一个条件为scrollMaxY
	  scrollMinY: 5, //纵向平移时如y轴位移不小于该值则视为视为满足滚动条件之一,另一个条件为scrollMaxX
	  scalePinchClose: 0.05, //缩小时比例必须小于该阀值
	  scalePinchOpen: 0.05, //放大时比例必须大于该阀值
	  durationPinch: 100, //每次缩放间隔时间
	  durationRotate: 100, //每次旋转间隔时间
	  durationPan: null, //每次平移间隔时间
	  rotationCcw: 5, //顺时间旋转时角度必须大于该阀值
	  rotationCw: 5, //逆时间旋转时角度必须大于该阀值
	  tapDuration: 350, //触摸时间不超过该阀值则视为轻触
	  tapLimitX: 0,
	  tapLimitY: 0,
	  holdLimitX: 1, //检测长按移动x轴距离阀值
	  holdLimitY: 1, //检测长按移动y轴距离阀值
	  shakeLimit: 0.23, //摇动速度超过该阀值则视为摇动
	  shakeDuration: 100, //每次检测摇动间隔时间
	  shakeFreezeDelay: 800 //解除冻结摇动延迟时间
	}, _temp)) || _class);
	exports.default = Gesture;

/***/ }
/******/ ])
});
;