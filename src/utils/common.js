import fj from '../core';

//Get global unique id
export const guid = () => {
  return new Date().getTime() + Math.random().toFixed(6).substr(2);
};

//为方法绑定this对象
export function bindThis(context, fns) {
  fns.forEach((fn) => {
    context[fn] = context[fn].bind(context);
  });
}