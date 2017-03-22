import fj from './core';
import config from './config';
import * as RegExp from './utils/regexp';
import * as Sort from './utils/sort';
import * as Math from './utils/math';
import * as Date from './utils/date';
import responsive from './higherOrders/responsive';
import Pagination from './components/pagination';
import Gesture from './components/gesture';

Object.assign(fj, {
  config,
  responsive,
  Pagination,
  Gesture
});

const _global = typeof self !== 'undefined' ? self : global;
_global.FlareJ = _global.fj = fj;

export * from './utils/browsers';
export * from './utils/common';
export * from './utils/page';
export * from './utils/delayOperate';
export * from './utils/domEvent';
export * from './components/grid';
export {
  Pagination,
  Gesture,
  RegExp,
  Sort,
  Math,
  Date
};
export default fj;