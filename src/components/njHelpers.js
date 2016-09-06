import React, { cloneElement } from 'react';
import nj, { registerFilter, registerExpr } from 'nornj';
import utils from '../utils/utils';

registerFilter({
  fixIconSize: (val) => {
    return val + (!utils.isWebkit ? ' fj-fixsize' : '');
  }
});

registerExpr({
  emptyElem: () => <div className="fj-empty-elem"></div>,
  cloneElem: function(props) {
    return cloneElement(this.result()[0], props);
  }
});