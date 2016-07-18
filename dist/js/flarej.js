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
(function(_g){(function(f){var r=(typeof require==='function'?require:function(name){return {"nornj":nj,"react":React,"react-dom":ReactDOM}[name];});if (typeof exports==='object'&&typeof module!=='undefined'){module.exports=f(r)}else if(typeof define==='function'&&define.amd){define(["nornj","react","react-dom"],f.bind(_g,r))}else{f(r)}})(function(require,define,module,exports){var _m=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
/*!
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
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

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
},{"_process":1,"fbjs/lib/invariant":5,"fbjs/lib/keyOf":6,"object-assign":7}],5:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

var _core = require('./core');

var _core2 = babelHelpers.interopRequireDefault(_core);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var _utils = require('./utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _pagination = require('./components/pagination/pagination.comp');

var _pagination2 = babelHelpers.interopRequireDefault(_pagination);

var _gridLayout = require('./components/gridLayout/gridLayout.comp');

babelHelpers.extends(_core2.default, _utils2.default, {
  Pagination: _pagination2.default,
  Row: _gridLayout.Row,
  RowLeft: _gridLayout.RowLeft,
  RowRight: _gridLayout.RowRight,
  Col: _gridLayout.Col,
  ClearFix: _gridLayout.ClearFix
});

module.exports = _core2.default;

},{"./components/gridLayout/gridLayout.comp":9,"./components/pagination/pagination.comp":13,"./core":18,"./utils/utils":28,"nornj":"nornj"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearFix = exports.Col = exports.RowRight = exports.RowLeft = exports.Row = undefined;

var _react = require('react');

var _nornj = require('nornj');

require('../../njConfig');

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var _utils = require('../../utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _gridLayout = require('./gridLayout.tmpl');

var _gridLayout2 = babelHelpers.interopRequireDefault(_gridLayout);

var templateRow = (0, _nornj.compileComponent)(_gridLayout2.default.row, 'row');
var templateCol = (0, _nornj.compileComponent)(_gridLayout2.default.col, 'col');
var templateClearFix = (0, _nornj.compileComponent)(_gridLayout2.default.clearFix, 'clearFix');

//Grid row

var Row = function (_Component) {
  babelHelpers.inherits(Row, _Component);

  function Row() {
    babelHelpers.classCallCheck(this, Row);
    return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var _utils$splitObject = _utils2.default.splitObject(this.props, ['className', 'style', 'left', 'right', 'children']);

    var _utils$splitObject2 = babelHelpers.slicedToArray(_utils$splitObject, 2);

    var _utils$splitObject2$ = _utils$splitObject2[0];
    var className = _utils$splitObject2$.className;
    var style = _utils$splitObject2$.style;
    var left = _utils$splitObject2$.left;
    var right = _utils$splitObject2$.right;
    var children = _utils$splitObject2$.children;
    var others = _utils$splitObject2[1];


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
      children: children
    });
  };

  return Row;
}(_react.Component);

Row.defaultProps = {
  fjType: 'row'
};


function _createRowRender(context, compClass) {
  return function () {
    var _classNames2;

    var _utils$splitObject3 = _utils2.default.splitObject(this.props, ['className', 'style', 'width', 'children']);

    var _utils$splitObject4 = babelHelpers.slicedToArray(_utils$splitObject3, 2);

    var _utils$splitObject4$ = _utils$splitObject4[0];
    var className = _utils$splitObject4$.className;
    var style = _utils$splitObject4$.style;
    var width = _utils$splitObject4$.width;
    var children = _utils$splitObject4$.children;
    var others = _utils$splitObject4[1];


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
      children: children
    });
  }.bind(context);
}

//Grid row left container

var RowLeft = function (_Component2) {
  babelHelpers.inherits(RowLeft, _Component2);

  function RowLeft(props) {
    babelHelpers.classCallCheck(this, RowLeft);

    var _this2 = babelHelpers.possibleConstructorReturn(this, _Component2.call(this, props));

    _this2.render = _createRowRender(_this2, 'fj-row-left');
    return _this2;
  }

  return RowLeft;
}(_react.Component);

//Grid row right container


RowLeft.defaultProps = {
  fjType: 'rowLeft'
};

var RowRight = function (_Component3) {
  babelHelpers.inherits(RowRight, _Component3);

  function RowRight(props) {
    babelHelpers.classCallCheck(this, RowRight);

    var _this3 = babelHelpers.possibleConstructorReturn(this, _Component3.call(this, props));

    _this3.render = _createRowRender(_this3, 'fj-row-right');
    return _this3;
  }

  return RowRight;
}(_react.Component);

//Grid col


RowRight.defaultProps = {
  fjType: 'rowRight'
};

var Col = function (_Component4) {
  babelHelpers.inherits(Col, _Component4);

  function Col() {
    babelHelpers.classCallCheck(this, Col);
    return babelHelpers.possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  Col.prototype.render = function render() {
    var _classNames3;

    var _utils$splitObject5 = _utils2.default.splitObject(this.props, ['className', 'l', 'm', 's', 'ms', 'right', 'left', 'shift', 'rightM', 'leftM', 'shiftM', 'rightS', 'leftS', 'shiftS', 'rightMs', 'leftMs', 'shiftMs', 'children']);

    var _utils$splitObject6 = babelHelpers.slicedToArray(_utils$splitObject5, 2);

    var _utils$splitObject6$ = _utils$splitObject6[0];
    var className = _utils$splitObject6$.className;
    var l = _utils$splitObject6$.l;
    var m = _utils$splitObject6$.m;
    var s = _utils$splitObject6$.s;
    var ms = _utils$splitObject6$.ms;
    var right = _utils$splitObject6$.right;
    var left = _utils$splitObject6$.left;
    var shift = _utils$splitObject6$.shift;
    var rightM = _utils$splitObject6$.rightM;
    var leftM = _utils$splitObject6$.leftM;
    var shiftM = _utils$splitObject6$.shiftM;
    var rightS = _utils$splitObject6$.rightS;
    var leftS = _utils$splitObject6$.leftS;
    var shiftS = _utils$splitObject6$.shiftS;
    var rightMs = _utils$splitObject6$.rightMs;
    var leftMs = _utils$splitObject6$.leftMs;
    var shiftMs = _utils$splitObject6$.shiftMs;
    var children = _utils$splitObject6$.children;
    var others = _utils$splitObject6[1];


    var classes = (0, _classnames2.default)((_classNames3 = {}, babelHelpers.defineProperty(_classNames3, 'fj-col' + l, l != null), babelHelpers.defineProperty(_classNames3, 'fj-col-m' + m, m != null), babelHelpers.defineProperty(_classNames3, 'fj-col-s' + s, s != null), babelHelpers.defineProperty(_classNames3, 'fj-col-ms' + ms, ms != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right' + right, right != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left' + left, left != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift' + shift, shift != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-m' + rightM, rightM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-m' + leftM, leftM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-m' + shiftM, shiftM != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-s' + rightS, rightS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-s' + leftS, leftS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-s' + shiftS, shiftS != null), babelHelpers.defineProperty(_classNames3, 'fj-col-right-ms' + rightMs, rightMs != null), babelHelpers.defineProperty(_classNames3, 'fj-col-left-ms' + leftMs, leftMs != null), babelHelpers.defineProperty(_classNames3, 'fj-col-shift-ms' + shiftMs, shiftMs != null), babelHelpers.defineProperty(_classNames3, className, className), _classNames3));

    return templateCol({
      props: others,
      classes: classes,
      children: children
    });
  };

  return Col;
}(_react.Component);

//Clear the float style


Col.defaultProps = {
  fjType: 'Col'
};

var ClearFix = function (_Component5) {
  babelHelpers.inherits(ClearFix, _Component5);

  function ClearFix() {
    babelHelpers.classCallCheck(this, ClearFix);
    return babelHelpers.possibleConstructorReturn(this, _Component5.apply(this, arguments));
  }

  ClearFix.prototype.render = function render() {
    var _classNames4;

    var _utils$splitObject7 = _utils2.default.splitObject(this.props, ['className', 'l', 'm', 's', 'ms']);

    var _utils$splitObject8 = babelHelpers.slicedToArray(_utils$splitObject7, 2);

    var _utils$splitObject8$ = _utils$splitObject8[0];
    var className = _utils$splitObject8$.className;
    var l = _utils$splitObject8$.l;
    var m = _utils$splitObject8$.m;
    var s = _utils$splitObject8$.s;
    var ms = _utils$splitObject8$.ms;
    var others = _utils$splitObject8[1];


    var classes = (0, _classnames2.default)((_classNames4 = {}, babelHelpers.defineProperty(_classNames4, 'fj-clearfix', l != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-m', m != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-s', s != null), babelHelpers.defineProperty(_classNames4, 'fj-clearfix-ms', ms != null), babelHelpers.defineProperty(_classNames4, className, className), _classNames4));

    return templateClearFix({
      props: others,
      classes: classes
    });
  };

  return ClearFix;
}(_react.Component);

ClearFix.defaultProps = {
  fjType: 'ClearFix'
};


(0, _nornj.registerComponent)({
  'fj-Row': Row,
  'fj-RowLeft': RowLeft,
  'fj-RowRight': RowRight,
  'fj-Col': Col,
  'fj-ClearFix': ClearFix
});

exports.Row = Row;
exports.RowLeft = RowLeft;
exports.RowRight = RowRight;
exports.Col = Col;
exports.ClearFix = ClearFix;

},{"../../njConfig":19,"../../utils/utils":28,"./gridLayout.tmpl":10,"classnames":2,"nornj":"nornj","react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _gridLayoutTmplNj = require('./gridLayout.tmpl.nj.js');

var _gridLayoutTmplNj2 = babelHelpers.interopRequireDefault(_gridLayoutTmplNj);

exports.default = _gridLayoutTmplNj2.default;

},{"./gridLayout.tmpl.nj.js":11}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = babelHelpers.taggedTemplateLiteral(['\n<div {...props} class={classes} style={styles}>\n  {children}\n</div>\n'], ['\n<div {...props} class={classes} style={styles}>\n  {children}\n</div>\n']),
    _templateObject2 = babelHelpers.taggedTemplateLiteral(['\n<div {...props} class={classes}>\n  {children}\n</div>\n'], ['\n<div {...props} class={classes}>\n  {children}\n</div>\n']),
    _templateObject3 = babelHelpers.taggedTemplateLiteral(['\n<div {...props} class={classes} />\n'], ['\n<div {...props} class={classes} />\n']);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var row = (0, _nornj2.default)(_templateObject);

var col = (0, _nornj2.default)(_templateObject2);

var clearFix = (0, _nornj2.default)(_templateObject3);

exports.default = {
  row: row,
  col: col,
  clearFix: clearFix
};

},{"nornj":"nornj"}],12:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var _utils = require('../utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

require('./pagination/pagination.tmplHelper');

(0, _nornj.registerFilter)({
  fixIconSize: function fixIconSize(val) {
    return val + (!_utils2.default.isWebkit ? ' fj-fixsize' : '');
  }
});

(0, _nornj.registerExpr)({
  EmptyElem: function EmptyElem() {
    return React.createElement('div', { className: 'fj-empty-elem' });
  }
});

},{"../utils/utils":28,"./pagination/pagination.tmplHelper":16,"nornj":"nornj"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nornj = require('nornj');

var _widget = require('../widget');

var _widget2 = babelHelpers.interopRequireDefault(_widget);

var _utils = require('../../utils/utils');

var _utils2 = babelHelpers.interopRequireDefault(_utils);

var _pagination = require('./pagination.tmpl');

var _pagination2 = babelHelpers.interopRequireDefault(_pagination);

var Pagination = function (_Widget) {
  babelHelpers.inherits(Pagination, _Widget);

  function Pagination(props) {
    babelHelpers.classCallCheck(this, Pagination);

    var _this = babelHelpers.possibleConstructorReturn(this, _Widget.call(this, props, {
      pageIndex: parseInt(props.pageIndex, 10),
      pageSize: parseInt(props.pageSize, 10)
    }));

    _this.template = (0, _nornj.compileComponent)(_pagination2.default, 'pagination');
    return _this;
  }

  Pagination.prototype.init = function init() {
    this.state.pageCount = this.getPageCount(); //总页数
    _Widget.prototype.init.call(this);

    this.pageSizesChange = this.pageSizesChange.bind(this);
    this.pageIndexBlur = this.pageIndexBlur.bind(this);
    this.setGoPage = this.setGoPage.bind(this);
    this.goPage = this.goPage.bind(this);
    this.refresh = this.refresh.bind(this);
  };

  Pagination.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props;
    var pageIndex = _props.pageIndex;
    var count = _props.count;

    pageIndex = parseInt(pageIndex, 10);
    count = parseInt(count, 10);

    var newState = {},
        isSetState = false;
    var indexN = parseInt(nextProps.pageIndex, 10),
        countN = parseInt(nextProps.count, 10);

    if (indexN !== pageIndex) {
      isSetState = true;
      newState.pageIndex = indexN;
      this.setGoPage(indexN);
    }
    if (countN !== count) {
      isSetState = true;
      newState.pageCount = this.getPageCount(this.state.pageSize, countN);
    }

    if (isSetState) {
      this.setState(newState);
    }
  };

  Pagination.prototype.componentWillMount = function componentWillMount() {
    //初始化时默认执行刷新
    this.refresh();
  };

  Pagination.prototype.getPageCount = function getPageCount() {
    var pageSize = arguments.length <= 0 || arguments[0] === undefined ? this.state.pageSize : arguments[0];
    var count = arguments.length <= 1 || arguments[1] === undefined ? this.props.count : arguments[1];

    return parseInt(count % pageSize > 0 ? count / pageSize + 1 : count / pageSize, 10);
  };

  //切换每页数据数


  Pagination.prototype.pageSizesChange = function pageSizesChange(e) {
    this.refresh(this.state.pageIndex, parseInt(e.target.value));
  };

  //页数文本框失去焦点


  Pagination.prototype.pageIndexBlur = function pageIndexBlur(e) {
    if (!_utils2.default.RegExp.num.test(e.target.value.trim())) {
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
    var pageIndex = arguments.length <= 0 || arguments[0] === undefined ? this.state.pageIndex : arguments[0];
    var pageSize = arguments.length <= 1 || arguments[1] === undefined ? this.state.pageSize : arguments[1];

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
      props.onChange.call(this, pageIndex, pageSize);
    }
  };

  //跳转页数


  Pagination.prototype.goPage = function goPage(e) {
    this.refresh(parseInt(this.refs.pageTxt.value, 10));
  };

  Pagination.prototype.render = function render() {
    var disabled = ' fj-disabled',
        state = this.state,
        extra = {
      pageSizesChange: this.pageSizesChange,
      pageIndexBlur: this.pageIndexBlur,
      goPage: this.goPage,
      refresh: this.refresh,
      firstDisabled: '',
      prevDisabled: '',
      nextDisabled: '',
      lastDisabled: ''
    };

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

    return this.template(state, this.props, extra);
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
};


(0, _nornj.registerComponent)({ 'fj-Pagination': Pagination });

exports.default = Pagination;

},{"../../utils/utils":28,"../widget":17,"./pagination.tmpl":14,"nornj":"nornj"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _paginationTmplNj = require('./pagination.tmpl.nj.js');

var _paginationTmplNj2 = babelHelpers.interopRequireDefault(_paginationTmplNj);

exports.default = _paginationTmplNj2.default;

},{"./pagination.tmpl.nj.js":15}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = babelHelpers.taggedTemplateLiteral(['\n<#for {\'1\' pageIndex:add(2)}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n<li onClick={refresh:clickBtn(next)}>...</li>\n<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>\n'], ['\n<#for {\'1\' pageIndex:add(2)}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n<li onClick={refresh:clickBtn(next)}>...</li>\n<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>\n']),
    _templateObject2 = babelHelpers.taggedTemplateLiteral(['\n<li class="fj-pagn-pageno{\'1\':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>\n<li onClick={refresh:clickBtn(prev)}>...</li>\n<#for {pageIndex:add(-2) pageIndex:add(2)}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n<li onClick={refresh:clickBtn(next)}>...</li>\n<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>\n'], ['\n<li class="fj-pagn-pageno{\'1\':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>\n<li onClick={refresh:clickBtn(prev)}>...</li>\n<#for {pageIndex:add(-2) pageIndex:add(2)}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n<li onClick={refresh:clickBtn(next)}>...</li>\n<li class=fj-pagn-pageno{pageCount:isCurrentPage} title=第{pageCount}页 onClick={refresh:clickBtn(last)}>{pageCount}</li>\n']),
    _templateObject3 = babelHelpers.taggedTemplateLiteral(['\n<li class="fj-pagn-pageno{\'1\':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>\n<li onClick={refresh:clickBtn(prev)}>...</li>\n<#for {pageIndex:add(-2) pageCount}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n'], ['\n<li class="fj-pagn-pageno{\'1\':isCurrentPage}" title=第1页 onClick={refresh:clickBtn(first)}>1</li>\n<li onClick={refresh:clickBtn(prev)}>...</li>\n<#for {pageIndex:add(-2) pageCount}>\n  <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n</#for>\n']),
    _templateObject4 = babelHelpers.taggedTemplateLiteral(['\n<li key=first class=fj-pagn-btn{firstDisabled} title=首页 onClick={refresh:clickBtn(first)}>\n  首页\n</li>\n<li key=prev class=fj-pagn-btn{prevDisabled} title=上一页 onClick={refresh:clickBtn(prev)}>\n  <i class="fa fa-chevron-left"></i>\n</li>\n<li>\n  <ul class=fj-pagn-pages>\n    <#if {hasPages}>\n      <#if {pageCount:lt(10)}>\n        <#for {\'1\' pageCount}>\n          <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n        </#for>\n      <#else />\n        <#if {pageIndex:showPartPage(1)}>\n          ', '\n        <#else />\n          <#if {pageIndex:showPartPage(2)}>\n            ', '\n          <#else />\n            <#if {pageIndex:showPartPage(3)}>\n              ', '\n            </#if>\n          </#if>\n        </#if>\n      </#if>\n    <#else />\n      <li class=fj-pagn-pageno-c title=第{pageIndex}页>{pageIndex}</li>\n    </#if>\n  </ul>\n</li>\n<li key=next class=fj-pagn-btn{nextDisabled} title=下一页 onClick={refresh:clickBtn(next)}>\n  <i class="fa fa-chevron-right"></i>\n</li>\n<li key=last class=fj-pagn-btn{lastDisabled} title=末页 onClick={refresh:clickBtn(last)}>\n  末页\n</li>\n'], ['\n<li key=first class=fj-pagn-btn{firstDisabled} title=首页 onClick={refresh:clickBtn(first)}>\n  首页\n</li>\n<li key=prev class=fj-pagn-btn{prevDisabled} title=上一页 onClick={refresh:clickBtn(prev)}>\n  <i class="fa fa-chevron-left"></i>\n</li>\n<li>\n  <ul class=fj-pagn-pages>\n    <#if {hasPages}>\n      <#if {pageCount:lt(10)}>\n        <#for {\'1\' pageCount}>\n          <li class=fj-pagn-pageno{#:isCurrentPage} title=第{#}页 onClick={refresh:clickBtn(index)}>{#}</li>\n        </#for>\n      <#else />\n        <#if {pageIndex:showPartPage(1)}>\n          ', '\n        <#else />\n          <#if {pageIndex:showPartPage(2)}>\n            ', '\n          <#else />\n            <#if {pageIndex:showPartPage(3)}>\n              ', '\n            </#if>\n          </#if>\n        </#if>\n      </#if>\n    <#else />\n      <li class=fj-pagn-pageno-c title=第{pageIndex}页>{pageIndex}</li>\n    </#if>\n  </ul>\n</li>\n<li key=next class=fj-pagn-btn{nextDisabled} title=下一页 onClick={refresh:clickBtn(next)}>\n  <i class="fa fa-chevron-right"></i>\n</li>\n<li key=last class=fj-pagn-btn{lastDisabled} title=末页 onClick={refresh:clickBtn(last)}>\n  末页\n</li>\n']),
    _templateObject5 = babelHelpers.taggedTemplateLiteral(['\n<#if {count:gt(1)}>\n  <div class=fj-pagn>\n    <ul class=fj-pagn-body>\n      ', '\n      <#if {showPageCount}>\n        <li class=fj-pagn-info>\n          共{pageCount}页\n        </li>\n      </#if>\n      <#if {showCount}>\n        <li class=fj-pagn-info>\n          共{count totalTxt}\n        </li>\n      </#if>\n      <#if {showPageSize}>\n        <li class=fj-pagn-info>\n          每页\n          <#if {setPageSize}>\n            <select class="fj-form-elem fj-pagn-pagesize" value={pageSize} onChange={pageSizesChange}>\n              <#each {pageSizes}>\n                <option key=page{#} value={.}>{.}</option>\n              </#each>\n            </select>\n          <#else />\n            {pageSize}\n          </#if>\n          条\n        </li>\n      </#if>\n      <#if {hasBtnGo}>\n        <li class=fj-pagn-txt>\n          到\n          <input type=text\n                 ref=pageTxt\n                 defaultValue={pageIndex}\n                 class="fj-form-elem fj-pagn-pageindex"\n                 autoComplete=off\n                 onBlur={pageIndexBlur}\n          />页\n          <button class="fj-btn fj-pagn-btn-go" type=button onClick={goPage}>\n            {btnGoName}\n          </button>\n        </li>\n      </#if>\n      <#if {showRefresh}>\n        <li class="{\'fj-pagn-btn-refresh\':fixIconSize}">\n          <i class="fa fa-refresh" title=刷新 onClick={refresh:clickBtn}></i>\n        </li>\n      </#if>\n    </ul>\n  </div>\n<#else />\n  <#EmptyElem />\n</#if>\n'], ['\n<#if {count:gt(1)}>\n  <div class=fj-pagn>\n    <ul class=fj-pagn-body>\n      ', '\n      <#if {showPageCount}>\n        <li class=fj-pagn-info>\n          共{pageCount}页\n        </li>\n      </#if>\n      <#if {showCount}>\n        <li class=fj-pagn-info>\n          共{count totalTxt}\n        </li>\n      </#if>\n      <#if {showPageSize}>\n        <li class=fj-pagn-info>\n          每页\n          <#if {setPageSize}>\n            <select class="fj-form-elem fj-pagn-pagesize" value={pageSize} onChange={pageSizesChange}>\n              <#each {pageSizes}>\n                <option key=page{#} value={.}>{.}</option>\n              </#each>\n            </select>\n          <#else />\n            {pageSize}\n          </#if>\n          条\n        </li>\n      </#if>\n      <#if {hasBtnGo}>\n        <li class=fj-pagn-txt>\n          到\n          <input type=text\n                 ref=pageTxt\n                 defaultValue={pageIndex}\n                 class="fj-form-elem fj-pagn-pageindex"\n                 autoComplete=off\n                 onBlur={pageIndexBlur}\n          />页\n          <button class="fj-btn fj-pagn-btn-go" type=button onClick={goPage}>\n            {btnGoName}\n          </button>\n        </li>\n      </#if>\n      <#if {showRefresh}>\n        <li class="{\'fj-pagn-btn-refresh\':fixIconSize}">\n          <i class="fa fa-refresh" title=刷新 onClick={refresh:clickBtn}></i>\n        </li>\n      </#if>\n    </ul>\n  </div>\n<#else />\n  <#EmptyElem />\n</#if>\n']);

var _nornj = require('nornj');

var _nornj2 = babelHelpers.interopRequireDefault(_nornj);

var partPage1 = (0, _nornj2.default)(_templateObject);

var partPage2 = (0, _nornj2.default)(_templateObject2);

var partPage3 = (0, _nornj2.default)(_templateObject3);

var pageBtns = (0, _nornj2.default)(_templateObject4, partPage1, partPage2, partPage3);

exports.default = (0, _nornj2.default)(_templateObject5, pageBtns);

},{"nornj":"nornj"}],16:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

(0, _nornj.registerFilter)({
  clickBtn: function clickBtn(fn, type) {
    var _this = this;

    var _data$ = this.data[0];
    var pageIndex = _data$.pageIndex;
    var pageCount = _data$.pageCount;


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
          if (_this.index != pageIndex) {
            fn(_this.index);
          }
        };
      default:
        return function () {
          return fn();
        };
    }
  },
  isCurrentPage: function isCurrentPage(no) {
    return parseInt(no, 10) == this.data[0].pageIndex ? '-c' : '';
  },
  showPartPage: function showPartPage(no, type) {
    var pageCount = this.data[0].pageCount;

    switch (type) {
      case '1':
        //当前页码<=4:左侧显示所有+当前页码+右侧2个页码+...+尾页
        return no <= 4;
      case '2':
        //当前页码>4,且<=页面总数(n)-3:首页+...+左侧2个页码+ 当前页码+右侧2个页码+...+尾页
        return no > 4 && no <= pageCount - 3;
      case '3':
        //当前页码>页面总数(n)- 3:首页+...+左侧2个页面+当前页码+右侧显示所有
        return no > pageCount - 3;
    }
  }
});

},{"nornj":"nornj"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = babelHelpers.interopRequireDefault(_reactAddonsUpdate);

var _nornj = require('nornj');

require('../njConfig');

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
    [props.defaultResponsiveParam, props.responsiveParam].forEach(function (responsiveParam) {
      (0, _nornj.each)(responsiveParam, function (rpp, media) {
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
    });

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

},{"../njConfig":19,"../utils/utils":28,"./njHelpers":12,"nornj":"nornj","react":"react","react-addons-update":3}],18:[function(require,module,exports){
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

//Set globel configs
fj.setConfig = function (config) {
  return babelHelpers.extends(fj, config);
};

exports.default = fj;

},{}],19:[function(require,module,exports){
'use strict';

var _nornj = require('nornj');

(0, _nornj.setTmplRule)(null, null, '#');

},{"nornj":"nornj"}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitObject = exports.pageHeight = exports.pageWidth = exports.mediaQuery = exports.guid = undefined;

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

var splitObject = exports.splitObject = function splitObject(obj, parts) {
  var left = {};
  var right = {};
  Object.keys(obj).forEach(function (k) {
    if (parts.indexOf(k) !== -1) {
      left[k] = obj[k];
    } else {
      right[k] = obj[k];
    }
  });
  return [left, right];
};

},{"../core":18}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDateStr = exports.toFormatString = exports.dateDiff = exports.parse = undefined;

var _math = require('./math');

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

},{"./math":25}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//千分位转换
var outputMoney = function outputMoney(number) {
  var bit = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareStringCH = exports.compareStringEN = exports.compareDate = exports.compareNumber = exports.compare = exports.getGB2312Pinyin = exports.getFirstChar = undefined;

var _core = require('../core');

var _core2 = babelHelpers.interopRequireDefault(_core);

var _regexp = require('./regexp');

var regExp = babelHelpers.interopRequireWildcard(_regexp);

var _date = require('./date');

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

  var _fj$GB2312Pinyin = _core2.default.GB2312Pinyin;
  var fonts = _fj$GB2312Pinyin.fonts;
  var pinyin = _fj$GB2312Pinyin.pinyin;

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
  var isAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
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
  var isAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
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
  var isAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
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
  var isAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
  var spC = arguments[3];
  var spC2 = arguments[4];
  var spV = arguments[5];

  x = getFirstChar(x);
  y = getFirstChar(y);
  return compare(x, y, isAsc, spC, spC2, spV);
};

//中文字符串比较算法
var compareStringCH = function compareStringCH(x, y) {
  var isAsc = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
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

},{"../core":18,"./date":22,"./regexp":26}],28:[function(require,module,exports){
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

var _regexp = require('./regexp');

var regExp = babelHelpers.interopRequireWildcard(_regexp);

var _sort = require('./sort');

var sort = babelHelpers.interopRequireWildcard(_sort);

var _math = require('./math');

var math = babelHelpers.interopRequireWildcard(_math);

var _date = require('./date');

var date = babelHelpers.interopRequireWildcard(_date);

var utils = {};

babelHelpers.extends(utils, common, browsers, delayOperate, domEvent, { RegExp: regExp }, { Sort: sort }, { Math: math }, { Date: date });

exports.default = utils;

},{"./browsers":20,"./common":21,"./date":22,"./delayOperate":23,"./domEvent":24,"./math":25,"./regexp":26,"./sort":27}]},{},[8]);
var _r=_m(8);_g.fj=_g.FlareJ=_r;return _r;})})(typeof window!=='undefined'?window:(typeof global!=='undefined'?global:(typeof self!=='undefined'?self:this)));