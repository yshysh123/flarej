import fj from './core';
import nj from 'nornj';
import React from 'react';
import ReactDOM from 'react-dom';
import utils from './utils/utils';
import Pagination from './components/pagination/component';
const widgets = { Pagination };

Object.assign(fj, utils, widgets);

nj.registerTagNamespace('fj');
nj.registerComponent(widgets);

let global = typeof self !== 'undefined' ? self : this;
global.FlareJ = global.fj = fj;

export default fj;