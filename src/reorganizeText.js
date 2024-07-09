const { lengthOfThaiString, splitThaiStringByLength } = require('@praphan.o/thai-sentence-cut');
function reorganizeText(message, wordLimit = 80) {
  const limit = wordLimit;
  return splitThaiStringByLength(message, limit);
}

module.exports = reorganizeText;
