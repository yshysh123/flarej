import * as math from './math';

//字符串转换为日期
export function parse(s) {
  let t = s.replace(/-/g, '/').replace(/T/g, ' ');
  let iDot = t.indexOf('.');
  if (iDot !== -1) {
    t = t.substr(0, iDot);
  }

  return new Date(t);
}

//日期格式化为字符串
export function format(date, fs, noAddZero) {
  if (fs.length === 1) {
    return date.getFullYear() + fs + (date.getMonth() + 1) + fs + date.getDate();
  }
  fs = fs.replace('yyyy', date.getFullYear());
  fs = fs.replace('mm', noAddZero ? (date.getMonth() + 1) : math.addZero(date.getMonth() + 1));
  fs = fs.replace('dd', noAddZero ? date.getDate() : math.addZero(date.getDate()));
  fs = fs.replace('hh', noAddZero ? date.getHours() : math.addZero(date.getHours()));
  fs = fs.replace('MM', noAddZero ? date.getMinutes() : math.addZero(date.getMinutes()));
  fs = fs.replace('ss', noAddZero ? date.getSeconds() : math.addZero(date.getSeconds()));

  return fs;
}