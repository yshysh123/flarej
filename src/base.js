import fj from './core';
import './utils/utils';

let global = typeof self !== "undefined" ? self : this;
global.FlareJ = global.fj = fj;

export default fj;