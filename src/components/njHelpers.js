import React from 'react';
import nj, { registerFilter, registerExpr } from 'nornj';
import utils from '../utils/utils';

registerFilter({
  fixIconSize: (val) => {
    return val + (!utils.isWebkit ? ' fj-fixsize' : '');
  }
});

registerExpr({
  EmptyElem: () => <div className="fj-empty-elem"></div>
});