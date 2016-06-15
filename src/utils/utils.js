import * as common from './common';
import * as browsers from './browsers';
import * as delayOperate from './delayOperate';
import * as domEvent from './domEvent';
import * as regExp from './regexp';
import * as sort from './sort';
import * as math from './math';
import * as date from './date';
let utils = {};

Object.assign(
  utils,
  common,
  browsers, 
  delayOperate,
  domEvent,
  { RegExp: regExp },
  { Sort: sort },
  { Math: math },
  { Date: date }
);

export default utils;