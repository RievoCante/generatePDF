const express = require('express');
const dayjs = require('dayjs');
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

    res.render('quotation.ejs', {
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

module.exports = router;
