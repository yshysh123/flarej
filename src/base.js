import fj from './core';
import nj from 'nornj';
import React from 'react';
import ReactDOM from 'react-dom';
import './utils/utils';
import Pagination from './components/pagination';

Object.assign(fj, { Pagination });

let global = typeof self !== 'undefined' ? self : this;
global.FlareJ = global.fj = fj;

export default fj;