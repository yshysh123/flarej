import React, { cloneElement } from 'react';
import nj, { registerFilter, registerExtension } from 'nornj';
import { isWebkit } from '../utils';
import tmpls from './njHelpers.t.html';

registerFilter({
  fixIconSize: (val) => {
    return val + (!isWebkit ? ' fj-fixsize' : '');
  }
});

registerExtension({
  emptyElem: () => tmpls.emptyElem(),
  cloneElem: (props, options) => cloneElement(options.result(), props)
});