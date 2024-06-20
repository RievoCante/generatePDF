const express = require('express');

const data = require('../dataMock');
const calculateAdditionalPages = require('../src/calculateAdditionalPages');
const imgToBase64 = require('../src/imgToBase64');
const helper = require('../src/helper');
const thaiBath = require('../src/thaiBath');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [base64Signature, base64CompanyLogo, additionalPages] = await Promise.all([
      imgToBase64(data.userSignature),
      imgToBase64(data.companyLogo),
      calculateAdditionalPages(),
    ]);

    res.render('quotation.ejs', {
      data,
      additionalPages,
      base64CompanyLogo,
      base64Signature,
      helper,
      thaiBath,
    });
  } catch {
    console.error('Internal Server Error');
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
