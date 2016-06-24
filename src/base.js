import fj from './core';
import nj from 'nornj';
import './njConfig';
import utils from './utils/utils';
import Pagination from './components/pagination/pagination.comp';
import { Row } from './components/gridLayout/gridLayout.comp';
const widgets = {
  'fj-Pagination': Pagination,
  'fj-Row': Row
};

Object.assign(fj, utils, widgets);
nj.registerComponent(widgets);

module.exports = fj;