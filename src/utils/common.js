import fj from '../core';

//Get global unique id
export const guid = () => {
  return new Date().getTime() + Math.random().toFixed(6).substr(2);
};

Object.assign(fj, {
  guid
});