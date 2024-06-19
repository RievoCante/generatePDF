const express = require('express');
const data = require('../dataMock');
const calculateAdditionalPages = require('../src/calculateAdditionalPages');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('quotation.ejs', {
    data: data,
    calculateAdditionalPages: calculateAdditionalPages,
  });
});

module.exports = router;
