import * as common from './common';
import * as browsers from './browsers';
import * as delayOperate from './delayOperate';
import * as domEvent from './domEvent';
let utils = {};

Object.assign(
  utils,
  common,
  browsers, 
  delayOperate,
  domEvent
);

export default utils;