let doc = document;

//Add dom event
export const on = (name, fn, elem, useCapture = false) => {
  (elem || doc).addEventListener(name, fn, useCapture);
};

//Remove dom event
export const off = (name, fn, elem, useCapture = false) => {
  (elem || doc).removeEventListener(name, fn, useCapture);
};