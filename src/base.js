import fj from './core';
import nj from 'nornj';
import './njConfig';
import utils from './utils/utils';
import Pagination from './components/pagination/pagination.comp';
import { Row, RowLeft, RowRight } from './components/gridLayout/gridLayout.comp';
const widgets = {
  'fj-Pagination': Pagination,
  'fj-Row': Row,
  'fj-RowLeft': RowLeft,
  'fj-RowRight': RowRight
};

Object.assign(fj, utils, widgets);
nj.registerComponent(widgets);

module.exports = fj;