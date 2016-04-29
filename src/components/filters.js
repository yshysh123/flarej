import { registerFilter } from 'nornj';

registerFilter({
  fixIconSize: function (val) {
    return val + (!fj.isWebkit ? ' fj-fixsize' : '');
  }
});