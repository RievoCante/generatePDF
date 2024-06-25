document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('button');
  const pdfContent = document.getElementById('pdfContent');
  button.addEventListener('click', () => {
    html2pdf()
      .set({
        filename: 'quotation.pdf',
        margin: 0,
        image: { type: 'jpg', quality: 0.95 },
        html2canvas: { scale: 1.7, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      })
      .from(pdfContent)
      .save();
  });
});
