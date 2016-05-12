import nj, { registerFilter, registerExpr } from 'nornj';
import './pagination/template.helper';

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
  },
  add: (val1, val2) => {
    return val1 + parseInt(val2, 10);
  }
});

registerExpr({
  'for': function (start = 0, end) {
    let ret = [];
    start = parseInt(start, 10);
    end = parseInt(end, 10);

    for (; start <= end; start++) {
      let retI = this.result({
        loop: true,
        item: this.data[0],
        index: start
      });

      ret = nj.listPush(ret, retI, true);
    }

    return ret;
  }
});