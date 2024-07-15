const express = require('express');
const dayjs = require('dayjs');
const puppeteer = require('puppeteer');
const buddhistEra = require('dayjs/plugin/buddhistEra');

const data = require('../dataMock');
const calculateAdditionalPages = require('../src/calculateAdditionalPages');
const imgToBase64 = require('../src/imgToBase64');
const helper = require('../src/helper');
const thaiBath = require('../src/thaiBath');
const numberToEnglish = require('../src/numberToEnglish');
const reorganizeText = require('../src/reorganizeText');
const { lengthOfThaiString, splitThaiStringByLength } = require('@praphan.o/thai-sentence-cut');

dayjs.extend(buddhistEra);

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [
      base64Signature,
      base64CompanyLogo,
      base64CreatedBySignature,
      base64eStamp,
      additionalPages,
      fixedRemark,
      fixedPaymentCondition,
      fixedCompanyAddress,
      fixedContactAddress,
    ] = await Promise.all([
      imgToBase64(data.userSignature),
      imgToBase64(data.companyLogo),
      imgToBase64(data.createdBySignature),
      imgToBase64(data.eStamp),
      calculateAdditionalPages(),
      reorganizeText(data.remark, 62),
      reorganizeText(data.paymentCondition, 130),
      reorganizeText(data.companyAddress, 100),
      reorganizeText(data.contactAddress, 100),
    ]);

    res.render('main.ejs', {
      data,
      additionalPages,
      base64CompanyLogo,
      base64Signature,
      base64CreatedBySignature,
      base64eStamp,
      fixedRemark,
      fixedPaymentCondition,
      fixedCompanyAddress,
      fixedContactAddress,
      helper,
      thaiBath,
      dayjs,
      numberToEnglish,
      reorganizeText,
      splitThaiStringByLength,
      lengthOfThaiString,
    });
  } catch (err) {
    console.error('Internal Server Error', err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/pdfContent', (req, res) => {
  res.render('test.ejs', { title: 'PDF Content', message: 'This is the PDF content' });
});

// Route to generate and download the PDF
router.get('/download-pdf', async (req, res) => {
  try {
    console.log('Starting browser...');
    const browser = await puppeteer.launch();
    console.log('Browser started.');

    console.log('Opening new page...');
    const page = await browser.newPage();
    console.log('New page opened.');

    console.log('Navigating to PDF content page...');
    await page.goto(`http://localhost:8000/pdfContent`, { waitUntil: 'networkidle0', timeout: 120000 });
    console.log('Navigation completed.');

    // Wait for a specific element to be visible
    await page.waitForSelector('body', { visible: true, timeout: 60000 });
    console.log('Content is fully loaded.');

    console.log('Generating PDF...');
    const pdf = await page.pdf({
      path: 'quotation.pdf',
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      timeout: 60000,
    });
    console.log('PDF generated.');

    await browser.close();
    console.log('Browser closed.');

    // Send the PDF as a response
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="quotation.pdf"',
    });
    res.send(pdf);
    console.log('PDF sent.');
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).send('Error generating PDF');
  }
});

module.exports = router;
