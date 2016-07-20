import fj from '../core';
let win = window,
  doc = document;

//Media query
export const mediaQuery = (media) => {
  var ret = false;

  if (win.matchMedia) {  //If the browser support matchMedia
    ret = win.matchMedia(media).matches;
  }
  else {
    //For browsers that support matchMedium api such as IE 9 and webkit. Reference by https://github.com/paulirish/matchMedia.js/blob/master/matchMedia.js
    var styleMedia = (win.styleMedia || win.media);
    if(styleMedia) {
      ret = styleMedia.matchMedium(media || 'all');
    }
  }

  return ret;
};

//Get current width of page
export const pageWidth = () => {
  return win.innerWidth != null ? win.innerWidth : doc.documentElement && doc.documentElement.clientWidth != null ? doc.documentElement.clientWidth : doc.body != null ? doc.body.clientWidth : null;
};

//Save initial width of page
fj.globalWidth = pageWidth();

//Get current height of page
export const pageHeight = () => {
  return win.innerHeight != null ? win.innerHeight : doc.documentElement && doc.documentElement.clientHeight != null ? doc.documentElement.clientHeight : doc.body != null ? doc.body.clientHeight : null;
};

//Save initial height of page
fj.globalHeight = pageHeight();