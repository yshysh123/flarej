import fj from '../core';

let _docMode = document.documentMode,
  _ua = navigator.userAgent.toLowerCase();

let _browser = {
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
export const isIE = _browser.ie || !!window.ActiveXObject || "ActiveXObject" in window;

//IE9
export const isIE9 = isIE && _browser.version == 9.0 && (!_docMode || _docMode == 9) || _docMode == 9;

//IE10
export const isIE10 = isIE && _browser.version == 10.0 && (!_docMode || _docMode == 10) || _docMode == 10;

//IE11
export const isIE11 = isIE && _browser.version == 11.0 && (!_docMode || _docMode == 11) || _docMode == 11;

//IE version less than 9
export const isIElt9 = isIE && !isIE9 && !isIE10 && !isIE11;

//IE version less than 11
export const isIElt11 = isIE9 || isIE10;

//IE version more than 10
export const isIEgt10 = isIE10 || isIE11;

//IE version more than 9
export const isIEgt9 = isIE9 || isIEgt10;

//FireFox
export const isFirefox = _browser.mozilla;

//Chrome
export const isChrome = _browser.chrome;

//Safari
export const isSafari = _browser.safari;

//Opera
export const isOpera = _browser.opera;

//Android
export const isAndroid = _browser.android;

//Iphone
export const isIphone = _browser.iphone;

//Ipad
export const isIpad = _browser.ipad;

//Ipod
export const isIpod = _browser.ipod;

//Ios
export const isIos = isIphone || isIpad || isIpod;

//Windows Phone
export const isWindowsPhone = _browser.windowsPhone;

//Mobile browser
export const isMobile = isAndroid || isIos || isWindowsPhone;

//Webkit and blink core browser
export const isWebkit = isChrome || isSafari || isAndroid || isIos;

Object.assign(fj, {
  isIE,
  isIE9,
  isIE10,
  isIE11,
  isIElt9,
  isIElt11,
  isIEgt10,
  isIEgt9,
  isFirefox,
  isChrome,
  isSafari,
  isOpera,
  isAndroid,
  isIphone,
  isIpad,
  isIpod,
  isIos,
  isWindowsPhone,
  isMobile,
  isWebkit
});