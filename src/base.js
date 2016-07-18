import fj from './core';
import nj from 'nornj';
import utils from './utils/utils';
import Pagination from './components/pagination/pagination.comp';
import {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
} from './components/gridLayout/gridLayout.comp';

Object.assign(fj, utils, {
  Pagination,
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
});

let global = typeof self !== 'undefined' ? self : this;
let libName = typeof G_NS !== 'undefined' ? G_NS : 'fj';
module.exports = global.FlareJ = global[libName] = fj;