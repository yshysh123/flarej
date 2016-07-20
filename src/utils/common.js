import fj from '../core';

//Get global unique id
export const guid = () => {
  return new Date().getTime() + Math.random().toFixed(6).substr(2);
};

export const splitObject = (obj, parts) => {
  let left = {};
  let right = {};
  Object.keys(obj).forEach((k)=> {
    if (parts.indexOf(k) !== -1) {
      left[k] = obj[k];
    }
    else {
      right[k] = obj[k];
    }
  });
  return [left, right];
};