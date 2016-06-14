//千分位转换
const outputMoney = (number, bit) => {
  var numO = number;  //保存原先值

  try {
    if (bit == null) {
      bit = 2;
    }

    if (isNaN(number) || number == "") {
      return "0";
    }
    number = number.toFixed(bit);
    if (number < 0) {
      return '-' + FJ.Math.outputDollars(Math.floor(Math.abs(number) - 0) + '') + FJ.Math.outputCents(Math.abs(number) - 0, bit);
    }
    else {
      return FJ.Math.outputDollars(Math.floor(number - 0) + '') + FJ.Math.outputCents(number - 0, bit);
    }
  }
  catch (e) {  //出现异常时返回原先值
    return numO;
  }
};

const outputDollars = (number) => {
  if (number.length <= 3) {
    return (number == '' ? '0' : number);
  }
  else {
    var mod = number.length % 3;
    var output = (mod == 0 ? '' : (number.substring(0, mod)));
    for (i = 0; i < Math.floor(number.length / 3) ; i++) {
      if ((mod == 0) && (i == 0))
        output += number.substring(mod + 3 * i, mod + 3 * i + 3);
      else
        output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
    }
    return (output);
  }
};

const outputCents = (amount, bit) => {
  if (bit != null) {
    amount = amount.toFixed(bit);
  }
  else {
    bit = 2;
  }

  if (bit > 0) {
    amount = (amount + "").match(/\.\d*$/g);      //截取小数点及小数部分
    //amount = (amount + "").replace(/0+?$/g, "");  //去除小数点后多余的0
  }
  else {
    amount = "";
  }

  return amount;
};

//在1位数字前补零
const addZero = (n) => {
  return (("00" + n).substr(("00" + n).length - 2));
};

export default {
  Math: {
    outputMoney,
    outputDollars,
    outputCents,
    addZero
  }
};