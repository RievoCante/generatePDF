document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const pdfContent = document.getElementById('pdfContent');

  button.addEventListener('click', () => {
    html2pdf()
      .set({
        margin: 3,
        filename: 'quotation.pdf',
        margin: 0,
        image: { type: 'jpg', quality: 0.95 },
        html2canvas: { scale: 1.7 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', precision: 20 },
      })
      .from(pdfContent)
      .save();
  });
});
