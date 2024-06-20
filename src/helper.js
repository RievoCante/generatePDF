const dayjs = require('dayjs');

function formatDateToDDMMYYHHMMSS() {
  return dayjs().format('DD-MM-YY-HH-mm-ss');
}

function formatBuddhistDate(dateOrISOString) {
  return dayjs(dateOrISOString).format('DD-MM-BBBB');
}

function formatDate(dateOrISOString) {
  return dayjs(dateOrISOString).format('DD-MM-YYYY');
}

function convertToPercent(number) {
  return `${(number * 100).toFixed(2)}%`;
}

function formatTwoDigits(number) {
  return `${number.toFixed(2)}`;
}

module.exports = {
  formatDateToDDMMYYHHMMSS,
  formatBuddhistDate,
  formatDate,
  convertToPercent,
  formatTwoDigits,
};
