import fj from '../core';
const doc = document;

//Add dom event
export function on(name, fn, elem, useCapture = false) {
  return (elem || doc).addEventListener(name, fn, useCapture);
}

//Remove dom event
export function off(name, fn, elem, useCapture = false) {
  return (elem || doc).removeEventListener(name, fn, useCapture);
}

Object.assign(fj, {
  on,
  off
});