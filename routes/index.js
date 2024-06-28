const express = require('express');

const data = require('../dataMock');
const calculateAdditionalPages = require('../src/calculateAdditionalPages');
const imgToBase64 = require('../src/imgToBase64');
const helper = require('../src/helper');
const thaiBath = require('../src/thaiBath');
const numberToEnglish = require('../src/numberToEnglish');
const reorganizeText = require('../src/reorganizeText');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [base64Signature, base64CompanyLogo, base64CreatedBySignature, base64eStamp, additionalPages, fixedRemark] =
      await Promise.all([
        imgToBase64(data.userSignature),
        imgToBase64(data.companyLogo),
        imgToBase64(data.createdBySignature),
        imgToBase64(data.eStamp),
        calculateAdditionalPages(),
        reorganizeText.reorganizeRemark(data.remark),
      ]);

    res.render('quotation.ejs', {
      data,
      additionalPages,
      base64CompanyLogo,
      base64Signature,
      base64CreatedBySignature,
      base64eStamp,
      fixedRemark,
      helper,
      thaiBath,
      numberToEnglish,
      reorganizeText,
    });
  } catch {
    console.error('Internal Server Error');
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
