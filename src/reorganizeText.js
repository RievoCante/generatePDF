function reorganizeRemark(message) {
  const wordLimit = 80;

  let x = message.split(' ');
  let y = [''];

  let count = 0;

  x.map((item) => {
    if (item.length >= wordLimit) {
      y.push(item);
      count++;
    }

    if (item.length < wordLimit) {
      if (y[count].length + item.length >= wordLimit) {
        y.push(item);
        count++;
      }

      if (y[count].length + item.length < wordLimit) {
        y[count] = y[count] + ' ' + item;
      }
    }
  });

  return y;
}

function reorganizeItemDescription(message, wordLimit = 80) {
  const limit = wordLimit;

  let x = message.split(' ');
  let y = [''];

  let count = 0;

  x.map((item) => {
    if (item.length >= limit) {
      y.push(item);
      count++;
    }

    if (item.length < limit) {
      if (y[count].length + item.length >= limit) {
        y.push(item);
        count++;
      }

      if (y[count].length + item.length < limit) {
        y[count] = y[count] + ' ' + item;
      }
    }
  });

  return y;
}

module.exports = { reorganizeRemark, reorganizeItemDescription };
