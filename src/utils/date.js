import { Math } from './math';

//日期转换
const parse = (s) => {
  let t = s.replace(/-/g, '/').replace(/T/g, ' ');
  let iDot = t.indexOf('.');
  if (iDot != -1) {
    t = t.substr(0, iDot);
  }

  return new Date(t);
};

//日期比较
const dateDiff = (sDate1, sDate2, returnType, useAbs) => {
  let aDate, aDate1, aDate2, oDate1, oDate2, days, iDays;

  if (typeof sDate1 != 'object') {
    if (sDate1.indexOf(' ') != -1) {
      aDate = sDate1.split(' ');
      aDate1 = aDate[0].split('-');
      aDate2 = aDate[1].split(':');
      oDate1 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2], aDate2[0], aDate2[1], aDate2[2]);
    }
    else {
      aDate1 = sDate1.split('-');
      oDate1 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2]);
    }
  }
  else {
    oDate1 = sDate1;
  }

  if (typeof sDate2 != 'object') {
    if (sDate2.indexOf(' ') != -1) {
      aDate = sDate2.split(' ');
      aDate1 = aDate[0].split('-');
      aDate2 = aDate[1].split(':');
      oDate2 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2], aDate2[0], aDate2[1], aDate2[2]);
    }
    else {
      aDate1 = sDate2.split('-');
      oDate2 = new Date(aDate1[0], aDate1[1] - 1, aDate1[2]);
    }
  }
  else {
    oDate2 = sDate2;
  }

  days = oDate1 - oDate2;  //计算日期差值
  if (useAbs) {  //取绝对值
    days = Math.abs(days);
  }

  //把相差的毫秒数转换为日期数值
  switch (returnType) {
    case 'h':  //小时
      iDays = parseInt(days / 1000 / 60 / 60, 10);
      break;
    case 'm':  //分钟
      iDays = parseInt(days / 1000 / 60, 10);
      break;
    case 's':  //秒
      iDays = parseInt(days / 1000, 10);
      break;
    case 'ms':  //毫秒
      iDays = days;
      break;
    default:   //天
      iDays = parseInt(days / 1000 / 60 / 60 / 24, 10);
      break;
  }

  return iDays;
};

//日期格式化
const toFormatString = (date, fs, noAddZero) => {
  if (fs.length == 1) {
    return date.getFullYear() + fs + (date.getMonth() + 1) + fs + date.getDate();
  }
  fs = fs.replace('yyyy', date.getFullYear());
  fs = fs.replace('mm', noAddZero ? (date.getMonth() + 1) : Math.addZero(date.getMonth() + 1));
  fs = fs.replace('dd', noAddZero ? date.getDate() : Math.addZero(date.getDate()));
  fs = fs.replace('hh', noAddZero ? date.getHours() : Math.addZero(date.getHours()));
  fs = fs.replace('MM', noAddZero ? date.getMinutes() : Math.addZero(date.getMinutes()));
  fs = fs.replace('ss', noAddZero ? date.getSeconds() : Math.addZero(date.getSeconds()));
  return fs;
};

//获取某些天后的日期
const GetDateStr = (addDays, addDays2, joinTxt, fs) => {
  let dd = new Date(), d1, d2 = '';
  dd.setDate(dd.getDate() + addDays);
  d1 = toFormatString(dd, fs != null ? fs : 'yyyy-mm-dd');
  if (addDays2 != null) {  //第二个日期
    let dd2 = new Date();
    dd2.setDate(dd2.getDate() + addDays2);
    d2 = toFormatString(dd2, fs != null ? fs : 'yyyy-mm-dd');
  }
  return d1 + (joinTxt != null ? joinTxt : '') + d2;
};

const Date = {
  parse,
  dateDiff,
  toFormatString,
  GetDateStr
};

export {
  Date
};