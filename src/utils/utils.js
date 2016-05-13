import * as common from './common';
import * as browsers from './browsers';
import * as delayOperate from './delayOperate';
import * as domEvent from './domEvent';
import regExp from './regexp';
let utils = {};

Object.assign(
  utils,
  common,
  browsers, 
  delayOperate,
  domEvent,
  regExp
);

export default utils;