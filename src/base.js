import fj from './core';
import nj from 'nornj';
import './njConfig';
import utils from './utils/utils';
import Pagination from './components/pagination/pagination.comp';
import {
  Row,
  RowLeft,
  RowRight,
  Col,
  ClearFix
} from './components/gridLayout/gridLayout.comp';
const widgets = {
  'fj-Pagination': Pagination,
  'fj-Row': Row,
  'fj-RowLeft': RowLeft,
  'fj-RowRight': RowRight,
  'fj-Col': Col,
  'fj-ClearFix': ClearFix
};

Object.assign(fj, utils, widgets);
nj.registerComponent(widgets);

module.exports = fj;