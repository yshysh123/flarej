import React, { cloneElement } from 'react';
import nj, { registerFilter, registerExpr } from 'nornj';
import { isWebkit } from '../utils';

registerFilter({
  fixIconSize: (val) => {
    return val + (!isWebkit ? ' fj-fixsize' : '');
  }
});

registerExpr({
  emptyElem: () => <div className="fj-empty-elem"></div>,
  cloneElem: function(props, options) {
    return cloneElement(options.result(), props);
  }
});