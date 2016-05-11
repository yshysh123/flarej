import { registerFilter } from 'nornj';

registerFilter({
  fixIconSize: (val) => {
    return val + (!fj.isWebkit ? ' fj-fixsize' : '');
  },
  lt: (val1, val2, noEqual) => {
    let ret;
    if (noEqual) {
      ret = val1 < val2;
    }
    else {
      ret = val1 <= val2;
    }

    return ret;
  },
  gt: (val1, val2, noEqual) => {
    let ret;
    if (noEqual) {
      ret = val1 > val2;
    }
    else {
      ret = val1 >= val2;
    }

    return ret;
  }
});