import fj from './core';
import nj from 'nornj';
import * as utils from './utils';
import Pagination from './components/pagination';
import {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
} from './components/gridLayout';
import Gesture from './components/gesture';

Object.assign(fj, utils, {
  Pagination,
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix,
  Gesture
});

let global = typeof self !== 'undefined' ? self : this;
module.exports = global.FlareJ = global.fj = fj;