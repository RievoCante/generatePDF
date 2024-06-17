const express = require('express');
const router = express.Router();
const data = require('../dataMock');

router.get('/', (req, res) => {
  res.render('quotation.ejs', {
    data: data,
  });
});

module.exports = router;
