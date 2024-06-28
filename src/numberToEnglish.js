// FIXME: สตางค์แสดงยังไม่ถูก
function numberToEnglish(amount) {
  const spellNumber = (number) => {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];

    if (number === 0) return 'zero';

    let word = '';
    let i = 0;

    while (number > 0) {
      let tempNumber = number % 1000;
      if (tempNumber > 0) {
        let str = '';

        // Handle hundreds
        if (Math.floor(tempNumber / 100) > 0) {
          str += `${units[Math.floor(tempNumber / 100)]} hundred`;
          tempNumber %= 100;
        }

        // Handle tens and teens
        if (tempNumber > 0) {
          if (str) str += ' ';
          if (tempNumber < 10) {
            str += units[tempNumber];
          } else if (tempNumber < 20) {
            str += teens[tempNumber - 10];
          } else {
            str += tens[Math.floor(tempNumber / 10)];
            if (tempNumber % 10 > 0) {
              str += ` ${units[tempNumber % 10]}`;
            }
          }
        }

        word = str + (thousands[i] ? ` ${thousands[i]}` : '') + (word ? ` ${word}` : '');
      }

      number = Math.floor(number / 1000);
      i += 1;
    }

    return word.trim();
  };

  const amountString = amount.toString();
  const amountFloat = parseFloat(amountString.replace(/,/g, '')).toFixed(2);
  const [integerPart, decimalPart] = amountFloat.split('.');

  let result = `${spellNumber(parseInt(integerPart, 10))} baht`;

  if (decimalPart !== '00') {
    const trimmedDecimalPart = decimalPart.replace(/0+$/, ''); // Remove trailing zeros
    if (trimmedDecimalPart !== '') {
      result += ` and ${spellNumber(parseInt(trimmedDecimalPart, 10))} satang`;
    }
  }

  return result;
}

module.exports = numberToEnglish;
