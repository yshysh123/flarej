import nj, { registerFilter, registerExpr } from 'nornj';
import utils from '../utils/utils';
import './pagination/pagination.tmplHelper';

registerFilter({
  fixIconSize: (val) => {
    return val + (!utils.isWebkit ? ' fj-fixsize' : '');
  },
  lt: (val1, val2, noEqual) => {
    let ret;
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);

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
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);

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
  },
  int: (val) => {
    return parseInt(val, 10);
  },
  bool: (val) => {
    if(val === 'false') {
      return false;
    }

    return Boolean(val);
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
  },
  EmptyElem: () => <div className="fj-empty-elem"></div>
});