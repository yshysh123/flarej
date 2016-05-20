import fj from './base';

let global = typeof self !== 'undefined' ? self : this;
global.FlareJ = global.fj = fj;

module.exports = fj;