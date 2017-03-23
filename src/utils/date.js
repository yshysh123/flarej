import fecha from 'fecha';

//字符串转换为日期
export function parse(dateStr, format = 'YYYY-MM-DD') {
  return fecha.parse(dateStr, format);
}