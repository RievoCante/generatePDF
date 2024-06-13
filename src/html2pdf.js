const fs = require('fs');
const pdf = require('html-pdf');

function html2pdf() {
  const html = fs.readFileSync('./views/quotation.ejs', 'utf8');
  const options = { format: 'A4' };

  pdf.create(html, options).toFile('./quotation.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
}

module.exports = html2pdf;
