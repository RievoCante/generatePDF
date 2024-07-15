document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const pdfContent = document.getElementById('pdfContent');
  button.addEventListener('click', () => {
    html2pdf()
      .set({
        filename: 'quotation.pdf',
        margin: 0,
        image: { type: 'png' },
        html2canvas: { scale: 1.3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true, compressPdf: true },
      })
      .from(pdfContent)
      .save();
  });
});
