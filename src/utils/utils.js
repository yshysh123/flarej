import fj from '../core';
import * as common from './common';
import * as browsers from './browsers';
import * as delayOperate from './delayOperate';

Object.assign(
  fj,
  common,
  browsers, 
  delayOperate
);

export default fj;