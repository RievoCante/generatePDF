function calculateAdditionalPages(itemCount) {
  let additionalPages = 0;
  if (itemCount > 5) additionalPages = Math.ceil((itemCount - 5) / 5);
  return additionalPages;
}

module.exports = calculateAdditionalPages;
