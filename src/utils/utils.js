import * as common from './common';
import * as browsers from './browsers';
import * as delayOperate from './delayOperate';
import * as domEvent from './domEvent';
import regExp from './regexp';
import sort from './sort';
import math from './math';
let utils = {};

Object.assign(
  utils,
  common,
  browsers, 
  delayOperate,
  domEvent,
  regExp,
  sort,
  math
);

export default utils;