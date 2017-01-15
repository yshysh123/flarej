import fj from './core';
import nj from 'nornj';
import config from './config';
import * as utils from './utils';
import Pagination from './components/pagination';
import {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
} from './components/grid';
import Gesture from './components/gesture';

fj.config = config;
Object.assign(fj, utils, {
  Pagination,
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix,
  Gesture
});

let _global = typeof self !== 'undefined' ? self : global;

module.exports = _global.FlareJ = _global.fj = fj;