//Lazy to do something
export const lazyDo = (fn, timeOut, doName, obj) => {
  let sto = null;

  if (!obj) {
    obj = window;
  }
  if (timeOut == null) {
    timeOut = 25;
  }

  //If before the implementation of the operation has not exceeded the time,then make it cancel.
  if (doName && obj[doName]) {
    clearTimeout(obj[doName]);
  }

  //Delay for a period of time to perform the operation.
  sto = setTimeout(() => {
    fn.call(obj);
  }, timeOut);

  if (doName) {
    obj[doName] = sto;
  }

  return sto;
};

//Poll to do something
export const pollDo = (fn, timeOut, doName, obj) => {
  var siv = null;

  if (!obj) {
    obj = window;
  }
  if (timeOut == null) {
    timeOut = 100;
  }

  //If the previous poll operation is exist,then make it cancel.
  if (doName && obj[doName]) {
    clearInterval(obj[doName]);
  }

  //Polling execution operations every interval a period of time.
  siv = setInterval(() => {
    if (fn.call(obj) === false) {
      clearInterval(siv);
    }
  }, timeOut);

  if (doName) {
    obj[doName] = siv;
  }

  return siv;
};