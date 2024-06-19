document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const pdfContent = document.getElementById('pdfContent');

  button.addEventListener('click', () => {
    html2pdf().from(pdfContent).save('quotation.pdf');
  });
});
