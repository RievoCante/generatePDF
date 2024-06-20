async function calculateAdditionalPages() {
  const data = require('../dataMock');
  const itemCount = await new Promise((resolve) => {
    setTimeout(() => resolve(data.documentItems.length), 0);
  });
  let additionalPages = 0;
  if (itemCount > 10) additionalPages = Math.ceil((itemCount - 10) / 10);
  return additionalPages;
}

module.exports = calculateAdditionalPages;

/*
-11th item-> return 1
-31th item-> return 2
-51th item-> return 3
-and so on
*/
