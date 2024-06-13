// // const populateData = require('./utils/populateData.js');
// // const data = require('./dataMock');

// // populateData(document, data);

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('button');
//   function generatePDF() {
//     alert('Button was clicked!');
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF({
//       orientation: 'p',
//       unit: 'mm',
//       format: 'a4',
//     });

//     const content = document.body;
//     doc.html(content, {
//       callback: function (pdf) {
//         pdf.save('document.pdf');
//       },
//     });
//   }

//   function html2pdf() {
//     const fs = require('fs');
//     const pdf = require('html-pdf');
//     const html = fs.readFileSync('./views/quotation.ejs', 'utf8');
//     const options = { format: 'A4' };

//     pdf.create(html, options).toFile('./businesscard.pdf', function (err, res) {
//       if (err) return console.log(err);
//       console.log(res);
//     });
//   }

//   // Import ภาษาไทย

//   button.addEventListener('click', html2pdf);
// });
