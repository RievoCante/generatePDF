async function calculateAdditionalPages() {
  const data = require('../dataMock');
  const itemCount = await new Promise((resolve) => {
    setTimeout(() => resolve(data.documentItems.length), 0);
  });

  let additionalPages = 0;

  if (itemCount > 6) {
    additionalPages = Math.ceil((itemCount - 6) / 10);
  }

  return additionalPages;
}

module.exports = calculateAdditionalPages;
