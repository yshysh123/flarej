(function (global) {
  var babelHelpers = global.babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  babelHelpers.jsx = function () {
    var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7;
    return function createRawReactElement(type, props, key, children) {
      var defaultProps = type && type.defaultProps;
      var childrenLength = arguments.length - 3;

      if (!props && childrenLength !== 0) {
        props = {};
      }

      if (props && defaultProps) {
        for (var propName in defaultProps) {
          if (props[propName] === void 0) {
            props[propName] = defaultProps[propName];
          }
        }
      } else if (!props) {
        props = defaultProps || {};
      }

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 3];
        }

        props.children = childArray;
      }

      return {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key === undefined ? null : '' + key,
        ref: null,
        props: props,
        _owner: null
      };
    };
  }();

  babelHelpers.asyncToGenerator = function (fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        step("next");
      });
    };
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.defineEnumerableProperties = function (obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    return obj;
  };

  babelHelpers.defaults = function (obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);

      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }

    return obj;
  };

  babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.instanceof = function (left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  };

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };

  babelHelpers.newArrowCheck = function (innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  };

  babelHelpers.objectDestructuringEmpty = function (obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  };

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers.selfGlobal = typeof global === "undefined" ? self : global;

  babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  babelHelpers.slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  babelHelpers.slicedToArrayLoose = function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      var _arr = [];

      for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        _arr.push(_step.value);

        if (i && _arr.length === i) break;
      }

      return _arr;
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };

  babelHelpers.taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  babelHelpers.taggedTemplateLiteralLoose = function (strings, raw) {
    strings.raw = raw;
    return strings;
  };

  babelHelpers.temporalRef = function (val, name, undef) {
    if (val === undef) {
      throw new ReferenceError(name + " is not defined - temporal dead zone");
    } else {
      return val;
    }
  };

  babelHelpers.temporalUndefined = {};

  babelHelpers.toArray = function (arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  };

  babelHelpers.toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };
})(typeof global === "undefined" ? self : global);
(function(g, f) { var r = (typeof require === 'function' ? require : function(name) { return {"nornj":nj,"react":React,"react-dom":ReactDOM}[name]; }); if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = f(r) } else if (typeof define === 'function' && define.amd) { define(["nornj","react","react-dom"], f.bind(g,r)) } else { g.FlareJ = f(r) } })(this, function(require,define, module,exports) { return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var _core2 = babelHelpers.interopRequireDefault(_core);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = babelHelpers.interopRequireDefault(_reactDom);

var _utils = require('./utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _component = require('./components/pagination/component');

var _component2 = babelHelpers.interopRequireDefault(_component);

var widgets = { Pagination: _component2.default };

babelHelpers.extends(_core2.default, _utils2.default, widgets);

_nornj2.default.registerTagNamespace('fj');
_nornj2.default.registerComponent(widgets);

var global = typeof self !== 'undefined' ? self : undefined;
global.FlareJ = global.fj = _core2.default;

exports.default = _core2.default;

},{"./components/pagination/component":2,"./core":5,"./utils/utils":10,"nornj":"nornj","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nornj = require('nornj');

var _widget = require('../widget');

var _widget2 = babelHelpers.interopRequireDefault(_widget);

var _template = require('./template');

var _template2 = babelHelpers.interopRequireDefault(_template);

var Pagination = function (_Widget) {
  babelHelpers.inherits(Pagination, _Widget);

  function Pagination(props) {
    babelHelpers.classCallCheck(this, Pagination);

    var _this = babelHelpers.possibleConstructorReturn(this, _Widget.call(this, props, {}));

    _this.template = (0, _nornj.compileComponent)(_template2.default);


    _this.init();
    return _this;
  }

  Pagination.prototype.show = function show() {
    return _Widget.prototype.show.call(this);
  };

  Pagination.prototype.render = function render() {
    return this.template({ id: this.show() });
  };

  return Pagination;
}(_widget2.default);

Pagination.defaultProps = {
  fjType: 'pagination',
  responsive: true,
  responsiveParam: {
    '(max-width: 768px)|pagination': {
      state: { objId: 10000 },
      delay: 100
    },
    '(min-width: 769px)|pagination': {
      state: { objId: 20000 },
      delay: 100
    }
  }
};
exports.default = Pagination;

},{"../widget":4,"./template":3,"nornj":"nornj"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "type": "nj_root", "content": [{ "type": "div", "content": [{ "type": "nj_plaintext", "content": [{ "props": [{ "prop": { "name": "id" }, "escape": true }], "strs": ["test", ""], "isAll": false }] }] }] };

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var _utils = require('../utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var win = window;

var Widget = function (_Component) {
  babelHelpers.inherits(Widget, _Component);

  function Widget(props, initialState) {
    babelHelpers.classCallCheck(this, Widget);

    var _this = babelHelpers.possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      objId: _utils2.default.guid()
    };


    babelHelpers.extends(_this.state, initialState);
    return _this;
  } //响应式配置
  /*
  '(max-width: 768px)|widget': {  //格式同css媒体查询相同,附加fjType是为了解决mixin时对象名相同
    state: { width: 320 },
    preHandler: function(isInit) {
      ...
    },
    handler: function(isInit) {
      ...
    },
    delay: 100
  }
  */


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

    var fn = this.responsiveResize = function () {
      //页面尺寸改变时触发响应式处理
      _utils2.default.lazyDo(function () {
        var isRh = true;
        if (props.responsiveOnlyWidth) {
          //只有在页面宽度改变时执行响应式处理
          var w = _utils2.default.pageWidth();
          if (w !== _this2.globalWidth) {
            //页面宽度和上一次不同
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

    _utils2.default.on('resize', fn, win);

    fn(true); //初始化时执行一次响应式处理
  };

  //响应式处理


  Widget.prototype.responsiveHandle = function responsiveHandle(isInit) {
    var _this3 = this;

    var props = this.props;

    _nornj2.default.each(props.responsiveParam, function (rpp, o) {
      var fnP = function fnP() {
        if (rpp.preHandler) {
          //执行响应前操作
          rpp.preHandler.call(_this3, isInit);
        }
        if (rpp.state) {
          //设置响应状态值
          _this3.setState(rpp.state);
        }
        if (rpp.handler) {
          //执行响应操作
          rpp.handler.call(_this3, isInit);
        }
      };

      if (fj.mediaQuery(o.split("|")[0])) {
        //符合条件时执行响应式处理
        if (rpp.delay) {
          //可延迟执行时间
          fj.lazyDo(function () {
            fnP();
          }, rpp.delay);
        } else {
          fnP();
        }
      }
    }, false, false);
  };

  Widget.prototype.componentWillUnmount = function componentWillUnmount() {
    var responsiveResize = this.responsiveResize;

    //移除响应式事件
    if (responsiveResize) {
      _utils2.default.off("resize", responsiveResize, win);
    }
  };

  Widget.prototype.show = function show() {
    return this.state.objId;
  };

  return Widget;
}(_react.Component);

Widget.defaultProps = {
  fjType: 'widget',
  responsive: false,
  responsiveDelay: 70,
  responsiveOnlyWidth: true,
  responsiveParam: {}
};
exports.default = Widget;

},{"../utils/utils":10,"nornj":"nornj","react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fj = {
    rootPath: '../../flarej/',
    initTheme: 'concise',
    ver: null,
    themeStoreName: 'fj_theme'
};

//Set globel configs
fj.setConfig = function (config) {
    return babelHelpers.extends(fj, config);
};

exports.default = fj;

},{}],6:[function(require,module,exports){
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
var isIE = exports.isIE = _browser.ie;

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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageHeight = exports.pageWidth = exports.mediaQuery = exports.guid = undefined;

var _core = require('../core');

var _core2 = babelHelpers.interopRequireDefault(_core);

var win = window,
    doc = document;

//Get global unique id
var guid = exports.guid = function guid() {
  return new Date().getTime() + Math.random().toFixed(6).substr(2);
};

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

},{"../core":5}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//Lazy to do something
var lazyDo = exports.lazyDo = function lazyDo(fn, timeOut, doName, obj) {
  var dn = doName != null,
      sto = null;

  if (!obj) {
    obj = window;
  }
  if (timeOut == null) {
    timeOut = 25;
  }

  //If before the implementation of the operation has not exceeded the time,then make it cancel.
  if (dn && obj[doName]) {
    clearTimeout(obj[doName]);
  }

  //Delay for a period of time to perform the operation.
  sto = setTimeout(function () {
    fn.call(obj);
  }, timeOut);

  if (dn) {
    obj[doName] = sto;
  }

  return sto;
};

//Poll to do something
var pollDo = exports.pollDo = function pollDo(fn, timeOut, doName, obj) {
  var dn = doName != null,
      siv = null;

  if (!obj) {
    obj = window;
  }
  if (timeOut == null) {
    timeOut = 100;
  }

  //If the previous poll operation is exist,then make it cancel.
  if (dn && obj[doName]) {
    clearInterval(obj[doName]);
  }

  //Polling execution operations every interval a period of time.
  siv = setInterval(function () {
    if (fn.call(obj) === false) {
      clearInterval(siv);
    }
  }, timeOut);

  if (dn) {
    obj[doName] = siv;
  }

  return siv;
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var doc = document;

//Add dom event
var on = exports.on = function on(name, fn, elem) {
  var useCapture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  (elem || doc).addEventListener(name, fn, useCapture);
};

//Remove dom event
var off = exports.off = function off(name, fn, elem) {
  var useCapture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  (elem || doc).removeEventListener(name, fn, useCapture);
};

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = require('./common');

var common = babelHelpers.interopRequireWildcard(_common);

var _browsers = require('./browsers');

var browsers = babelHelpers.interopRequireWildcard(_browsers);

var _delayOperate = require('./delayOperate');

var delayOperate = babelHelpers.interopRequireWildcard(_delayOperate);

var _domEvent = require('./domEvent');

var domEvent = babelHelpers.interopRequireWildcard(_domEvent);

var utils = {};

babelHelpers.extends(utils, common, browsers, delayOperate, domEvent);

exports.default = utils;

},{"./browsers":6,"./common":7,"./delayOperate":8,"./domEvent":9}]},{},[1]);
(1); });