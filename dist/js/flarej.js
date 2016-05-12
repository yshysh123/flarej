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
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
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
    var timeout = setTimeout(cleanUpNextTick);
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
    clearTimeout(timeout);
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
        setTimeout(drainQueue, 0);
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

},{}],2:[function(require,module,exports){
/* eslint-disable no-unused-vars */
'use strict';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
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

},{}],3:[function(require,module,exports){
module.exports = require('react/lib/update');
},{"react/lib/update":4}],4:[function(require,module,exports){
(function (process){
/**
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

var _assign = require('object-assign');

var keyOf = require('fbjs/lib/keyOf');
var invariant = require('fbjs/lib/invariant');
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
  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : void 0;
  var specValue = spec[command];
  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : void 0;
}

function update(value, spec) {
  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : void 0;

  if (hasOwnProperty.call(spec, COMMAND_SET)) {
    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : void 0;

    return spec[COMMAND_SET];
  }

  var nextValue = shallowCopy(value);

  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
    var mergeObj = spec[COMMAND_MERGE];
    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : void 0;
    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : void 0;
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
    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : void 0;
    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
    spec[COMMAND_SPLICE].forEach(function (args) {
      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : void 0;
      nextValue.splice.apply(nextValue, args);
    });
  }

  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : void 0;
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
}).call(this,require('_process'))
},{"_process":1,"fbjs/lib/invariant":5,"fbjs/lib/keyOf":6,"object-assign":2}],5:[function(require,module,exports){
(function (process){
/**
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
}).call(this,require('_process'))
},{"_process":1}],6:[function(require,module,exports){
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
var keyOf = function (oneKeyObj) {
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
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var _core2 = babelHelpers.interopRequireDefault(_core);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

require('./njConfig');

var _utils = require('./utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _component = require('./components/pagination/component');

var _component2 = babelHelpers.interopRequireDefault(_component);

var widgets = { Pagination: _component2.default };

babelHelpers.extends(_core2.default, _utils2.default, widgets);
_nornj2.default.registerComponent(widgets);

var global = typeof self !== 'undefined' ? self : undefined;
global.FlareJ = global.fj = _core2.default;

exports.default = _core2.default;

},{"./components/pagination/component":9,"./core":14,"./njConfig":15,"./utils/utils":20,"nornj":"nornj"}],8:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

require('./pagination/templateHelper');

(0, _nornj.registerFilter)({
  fixIconSize: function fixIconSize(val) {
    return val + (!fj.isWebkit ? ' fj-fixsize' : '');
  },
  lt: function lt(val1, val2, noEqual) {
    var ret = void 0;
    if (noEqual) {
      ret = val1 < val2;
    } else {
      ret = val1 <= val2;
    }

    return ret;
  },
  gt: function gt(val1, val2, noEqual) {
    var ret = void 0;
    if (noEqual) {
      ret = val1 > val2;
    } else {
      ret = val1 >= val2;
    }

    return ret;
  }
});

},{"./pagination/templateHelper":12,"nornj":"nornj"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nornj = require('nornj');

var _widget = require('../widget');

var _widget2 = babelHelpers.interopRequireDefault(_widget);

var _template = require('./template');

var _template2 = babelHelpers.interopRequireDefault(_template);

var template = (0, _nornj.compileComponent)(_template2.default, 'pagination');

var Pagination = function (_Widget) {
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

    this.pageSizesChange = this.pageSizesChange.bind(this);
    this.goPage = this.goPage.bind(this);
    this.refresh = this.refresh.bind(this);
  };

  Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.pageIndex !== this.props.pageIndex) {
      this.setState({ pageIndex: nextProps.pageIndex });
    }
  };

  //shouldComponentUpdate (nextProps, nextState) {
  //  if(nextState.) {
  //  }
  //}

  Pagination.prototype.getPageCount = function getPageCount() {
    var pageSize = arguments.length <= 0 || arguments[0] === undefined ? this.state.pageSize : arguments[0];
    var count = this.props.count;


    return parseInt(count % pageSize > 0 ? count / pageSize + 1 : count / pageSize, 10);
  };

  //切换每页数据数


  Pagination.prototype.pageSizesChange = function pageSizesChange(e) {
    this.refresh(this.state.pageIndex, e.target.value);
  };

  //刷新分页


  Pagination.prototype.refresh = function refresh() {
    var page = arguments.length <= 0 || arguments[0] === undefined ? this.state.pageIndex : arguments[0];
    var pageSize = arguments.length <= 1 || arguments[1] === undefined ? this.state.pageSize : arguments[1];

    this.refs.pageTxt.value = page;
    this.setState({
      pageIndex: page,
      pageSize: pageSize,
      pageCount: this.getPageCount(pageSize)
    });
  };

  //跳转页数


  Pagination.prototype.goPage = function goPage(e) {
    this.refresh(this.refs.pageTxt.value);
  };

  Pagination.prototype.render = function render() {
    var disabled = ' fj-disabled',
        state = this.state,
        extra = {
      pageSizesChange: this.pageSizesChange,
      goPage: this.goPage,
      refresh: this.refresh,
      firstDisabled: '',
      prevDisabled: '',
      nextDisabled: '',
      lastDisabled: ''
    };

    //计算按钮展示逻辑
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

    return template(state, this.props, extra);
  };

  return Pagination;
}(_widget2.default);

Pagination.defaultProps = {
  fjType: 'pagn',
  pageSize: 15, //每页数据数
  pageSizes: [15, 30, 50], //可选择的每页数据数
  pageIndex: 1, //当前页码,从1开始
  count: 0, //数据总数
  totalTxt: "条数据",
  btnGoName: "跳转", //跳转按钮上的字
  noCount: false, //为true则在无法获取数据总数时使用
  setPageSize: false, //是否可以设置每页数据数
  showCount: true, //是否显示数据总数
  showPageSize: true, //是否显示每页数据数
  showPageCount: true, //是否显示总页数
  showRefresh: true,
  hasPages: true, //是否显示页数链接
  responsive: true,
  responsiveDelay: 70,
  responsiveOnlyWidth: true,
  responsiveParam: {
    '(max-width: 768px)|default': {
      //preHandler: (isInit, newState) => {
      //  newState.objId = 5000;
      //  return newState;
      //},
      state: { objId: 10000 },
      delay: 100
    },
    '(min-width: 769px)|default': {
      state: { objId: 20000 },
      delay: 100
    }
  }
};
exports.default = Pagination;

},{"../widget":13,"./template":10,"nornj":"nornj"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _templateNj = require('./template.nj.js');

var _templateNj2 = babelHelpers.interopRequireDefault(_templateNj);

exports.default = _templateNj2.default;

},{"./template.nj.js":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = babelHelpers.taggedTemplateLiteral(['\n<li key=first class=fj-pagn-btn{firstDisabled} title=首页 onClick={refresh:clickBtn(first)}>\n  首页\n</li>\n<li key=prev class=fj-pagn-btn{prevDisabled} title=上一页 onClick={refresh:clickBtn(prev)}>\n  <i class="fa fa-chevron-left"></i>\n</li>\n<#if {hasPages}>\n  <li>\n    <ul class=fj-pagn-pages>\n      <li class=fj-pagn-pageno>1</li>\n      <li class=fj-pagn-pageno-c>2</li>\n      <li class=fj-pagn-pageno>3</li>\n    </ul>\n  </li>\n</#if>\n<li key=next class=fj-pagn-btn{nextDisabled} title=下一页 onClick={refresh:clickBtn(next)}>\n  <i class="fa fa-chevron-right"></i>\n</li>\n<li key=last class=fj-pagn-btn{lastDisabled} title=末页 onClick={refresh:clickBtn(last)}>\n  末页\n</li>\n'], ['\n<li key=first class=fj-pagn-btn{firstDisabled} title=首页 onClick={refresh:clickBtn(first)}>\n  首页\n</li>\n<li key=prev class=fj-pagn-btn{prevDisabled} title=上一页 onClick={refresh:clickBtn(prev)}>\n  <i class="fa fa-chevron-left"></i>\n</li>\n<#if {hasPages}>\n  <li>\n    <ul class=fj-pagn-pages>\n      <li class=fj-pagn-pageno>1</li>\n      <li class=fj-pagn-pageno-c>2</li>\n      <li class=fj-pagn-pageno>3</li>\n    </ul>\n  </li>\n</#if>\n<li key=next class=fj-pagn-btn{nextDisabled} title=下一页 onClick={refresh:clickBtn(next)}>\n  <i class="fa fa-chevron-right"></i>\n</li>\n<li key=last class=fj-pagn-btn{lastDisabled} title=末页 onClick={refresh:clickBtn(last)}>\n  末页\n</li>\n']),
    _templateObject2 = babelHelpers.taggedTemplateLiteral(['\n<div class=fj-pagn>\n  <ul class=fj-pagn-body>\n    ', '\n    <#if {showPageCount}>\n      <li class=fj-pagn-info>\n        共{pageCount}页\n      </li>\n    </#if>\n    <#if {showCount}>\n      <li class=fj-pagn-info>\n        共{count totalTxt}\n      </li>\n    </#if>\n    <#if {showPageSize}>\n      <li class=fj-pagn-info>\n        每页\n        <#if {setPageSize}>\n          <select class="fj-form-elem fj-pagn-pagesize" value={pageSize} onChange={pageSizesChange}>\n            <#each {pageSizes}>\n              <option key=page{#} value={.}>{.}</option>\n            </#each>\n          </select>\n        <#else />\n          {pageSize}\n        </#if>\n        条\n      </li>\n    </#if>\n    <li class=fj-pagn-txt>\n      到\n      <input type=text\n             ref=pageTxt\n             defaultValue={pageIndex}\n             class="fj-form-elem fj-pagn-pageindex"\n             autocomplete=off\n      />页\n      <button class="fj-btn fj-pagn-btn-go" type=button onClick={goPage}>\n        {btnGoName}\n      </button>\n    </li>\n    <#if {showRefresh}>\n      <li class="{\'fj-pagn-btn-refresh\':fixIconSize}">\n        <i class="fa fa-refresh" title=刷新 onClick={refresh:clickBtn}></i>\n      </li>\n    </#if>\n  </ul>\n</div>\n'], ['\n<div class=fj-pagn>\n  <ul class=fj-pagn-body>\n    ', '\n    <#if {showPageCount}>\n      <li class=fj-pagn-info>\n        共{pageCount}页\n      </li>\n    </#if>\n    <#if {showCount}>\n      <li class=fj-pagn-info>\n        共{count totalTxt}\n      </li>\n    </#if>\n    <#if {showPageSize}>\n      <li class=fj-pagn-info>\n        每页\n        <#if {setPageSize}>\n          <select class="fj-form-elem fj-pagn-pagesize" value={pageSize} onChange={pageSizesChange}>\n            <#each {pageSizes}>\n              <option key=page{#} value={.}>{.}</option>\n            </#each>\n          </select>\n        <#else />\n          {pageSize}\n        </#if>\n        条\n      </li>\n    </#if>\n    <li class=fj-pagn-txt>\n      到\n      <input type=text\n             ref=pageTxt\n             defaultValue={pageIndex}\n             class="fj-form-elem fj-pagn-pageindex"\n             autocomplete=off\n      />页\n      <button class="fj-btn fj-pagn-btn-go" type=button onClick={goPage}>\n        {btnGoName}\n      </button>\n    </li>\n    <#if {showRefresh}>\n      <li class="{\'fj-pagn-btn-refresh\':fixIconSize}">\n        <i class="fa fa-refresh" title=刷新 onClick={refresh:clickBtn}></i>\n      </li>\n    </#if>\n  </ul>\n</div>\n']);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var pageBtns = (0, _nornj2.default)(_templateObject);

exports.default = (0, _nornj2.default)(_templateObject2, pageBtns);

},{"nornj":"nornj"}],12:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

(0, _nornj.registerFilter)({
  clickBtn: function clickBtn(fn, type) {
    var _this = this;

    switch (type) {
      case 'first':
        return function () {
          return fn(1);
        };
      case 'prev':
        return function () {
          return fn(parseInt(_this.data[0].pageIndex, 10) - 1);
        };
      case 'next':
        return function () {
          return fn(parseInt(_this.data[0].pageIndex, 10) + 1);
        };
      case 'last':
        return function () {
          return fn(_this.data[0].pageCount);
        };
      default:
        return function () {
          return fn();
        };
    }
  }
});

},{"nornj":"nornj"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

var _nornj = require('nornj');

var _utils = require('../utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

require('./njHelpers');

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
      _utils2.default.lazyDo(function () {
        var isRh = true;

        //只有在页面宽度改变时执行响应式处理
        if (props.responsiveOnlyWidth) {
          var w = _utils2.default.pageWidth();

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

    _utils2.default.on('resize', fn, win);

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
    (0, _nornj.each)(props.responsiveParam, function (rpp, o) {
      var media = o.split("|")[0];
      if (_utils2.default.mediaQuery(media)) {
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

    //执行响应后操作
    var runHandlers = function runHandlers() {
      (0, _nornj.each)(handlers, function (h) {
        var fnH = function fnH() {
          h.handler.call(_this3, isInit);
        };

        if (h.delay) {
          //可延迟执行时间
          _utils2.default.lazyDo(function () {
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
      _utils2.default.off("resize", responsiveResize, win);
    }
  };

  return Widget;
}(_react.Component);

exports.default = Widget;

},{"../utils/utils":20,"./njHelpers":8,"nornj":"nornj","react":"react","react-addons-update":3}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

(0, _nornj.registerTagNamespace)('fj');
(0, _nornj.setTmplRule)(null, null, '#');

},{"nornj":"nornj"}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"../core":14}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{"./browsers":16,"./common":17,"./delayOperate":18,"./domEvent":19}]},{},[7]);
(7); });