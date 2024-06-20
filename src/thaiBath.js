function checkNumber(input) {
  let decimal = false;
  let result = input.toString();
  result = result.replace(/ |,|บาท|฿/gi, '');
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '.') {
      decimal = true;
    }
  }
  if (decimal === false) {
    result += '.00';
  }
  return result;
}

function arabicNumberToText(input) {
  let inputFormat = checkNumber(input);
  const NumberArray = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ'];
  const DigitArray = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน'];
  let BahtText = '';
  if (Number.isNaN(inputFormat)) {
    return 'ข้อมูลนำเข้าไม่ถูกต้อง';
  }
  if (inputFormat - 0 > 9999999.9999) {
    return 'ข้อมูลนำเข้าเกินขอบเขตที่ตั้งไว้';
  }
  inputFormat = inputFormat.split('.');
  if (inputFormat[1].length > 0) {
    inputFormat[1] = inputFormat[1].substring(0, 2);
  }
  const NumberLen = inputFormat[0].length - 0;
  for (let i = 0; i < NumberLen; i++) {
    const tmp = inputFormat[0].substring(i, i + 1) - 0;
    if (tmp !== 0) {
      if (i === NumberLen - 1 && tmp === 1) {
        BahtText += 'เอ็ด';
      } else if (i === NumberLen - 2 && tmp === 2) {
        BahtText += 'ยี่';
      } else if (i === NumberLen - 2 && tmp === 1) {
        BahtText += '';
      } else {
        BahtText += NumberArray[tmp];
      }
      BahtText += DigitArray[NumberLen - i - 1];
    }
  }
  BahtText += 'บาท';
  if (inputFormat[1] === '0' || inputFormat[1] === '00') {
    BahtText += 'ถ้วน';
  } else {
    const decimalLen = inputFormat[1].length - 0;
    for (let i = 0; i < decimalLen; i++) {
      const tmp = inputFormat[1].substring(i, i + 1) - 0;
      if (tmp !== 0) {
        if (i === decimalLen - 1 && tmp === 1) {
          BahtText += 'เอ็ด';
        } else if (i === decimalLen - 2 && tmp === 2) {
          BahtText += 'ยี่';
        } else if (i === decimalLen - 2 && tmp === 1) {
          BahtText += '';
        } else {
          BahtText += NumberArray[tmp];
        }
        BahtText += DigitArray[decimalLen - i - 1];
      }
    }
    BahtText += 'สตางค์';
  }
  return BahtText;
}

module.exports = { arabicNumberToText, checkNumber };
