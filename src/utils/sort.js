import fj from '../core';
import regExp from './regexp';
const { RegExp } = regExp;

//取字符串的第一个字符
const getFirstChar = (s) => {
  if (s == '') {
    return '';
  }

  return (s + '').substr(0, 1);
};

//取得汉字的拼音
const getGB2312Pinyin = (str, sp) => {
  let i, l, t, p, ret = '';
  if (sp == null) {
    sp = '';
  }

  const { fonts, pinyin } = fj.GB2312Pinyin;
  for (i = 0, l = str.length; i < l; i++) {
    if (str.charCodeAt(i) >= 0x4e00) {
      p = fonts.indexOf(str.charAt(i));
      if (p > -1 && p < 3755) {
        for (t = pinyin.length - 1; t > 0; t = t - 2) {
          if (pinyin[t] <= p) {
            break;
          }
        }
        if (t > 0) {
          ret += pinyin[t - 1] + sp;
        }
      }
    }
  }

  return ret.substr(0, ret.length - sp.length);
};

//简单值比较算法
const compare = (x, y, isAsc = true, spC, spC2, spV) => {
  spV = spV != null ? spV : -1;
  if (spC && !spC2) {  //如有禁止排序标记则拍在最低位置
    return -1;
  }
  else if (!spC && spC2) {
    return 1;
  }
  else if (spC && spC2) {
    return 0;
  }
  if (x > y) {
    return !isAsc ? -1 : 1;
  }
  else if (x < y) {
    return !isAsc ? 1 : -1;
  }
  else {
    return 0;
  }
};

//数字比较算法
const compareNumber = (x, y, isAsc = true, spC, spC2, spV) => {
  let r = /[^d|.|-]/g;
  x = (x + '').replace(r, '');
  y = (y + '').replace(r, '');
  return compare(x * 1, y * 1, isAsc, spC, spC2, spV);
};

////日期比较算法
//const compareDate = (x, y, isAsc = true, spC, spC2, spV) => {
//  var d = '1900-01-01';
//  var x = FJ.Date.parse(x == '' ? d : x);
//  var y = FJ.Date.parse(y == '' ? d : y);
//  var z = x - y;

//  spV = spV != null ? spV : -1;
//  if (spC && !spC2) {  //如有禁止排序标记则拍在最低位置
//    return -1;
//  }
//  else if (!spC && spC2) {
//    return 1;
//  }
//  else if (spC && spC2) {
//    return 0;
//  }
//  return !isAsc ? z * (-1) : z;
//};

//英文字符串比较算法
const compareStringEN = (x, y, isAsc = true, spC, spC2, spV) => {
  x = getFirstChar(x);
  y = getFirstChar(y);
  return compare(x, y, isAsc, spC, spC2, spV);
};

//中文字符串比较算法
const compareStringCH = (x, y, isAsc = true, spC, spC2, spV) => {
  if (fj.GB2312Pinyin.fonts) {  //如果第一个字符非中文的则不获取拼音直接用第一个字符比较
    x = x == '' ? '' : RegExp.chFirst.test(x) ? getGB2312Pinyin(getFirstChar(x)) : getFirstChar(x);
    y = y == '' ? '' : RegExp.chFirst.test(y) ? getGB2312Pinyin(getFirstChar(y)) : getFirstChar(y);
    return compare(x, y, isAsc, spC, spC2, spV);
  }
  else {
    return compareStringEN(x, y, isAsc, spC, spC2, spV);
  }
};

export default {
  Sort: {
    getFirstChar,
    getGB2312Pinyin,
    compare,
    compareNumber,
    compareStringEN,
    compareStringCH
  }
};