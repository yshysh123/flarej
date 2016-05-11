import { registerFilter } from 'nornj';

registerFilter({
  bind: (self, fnName, ...params) => {
    return this[fnName].bind(self, ...params);
    //return Function.prototype.bind.apply(this[fnName], [self, ...params]);
  }
});