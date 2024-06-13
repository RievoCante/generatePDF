const express = require('express');
const router = express.Router();
const fs = require('fs');
const { JSDOM } = require('jsdom');
const { jsPDF } = require('jspdf');
const data = require('../dataMock');
const { log } = require('console');
const { html2pdf } = require('../src/html2pdf');

// router.post('/generate', (req, res) => {
//   html2pdf();
// });

router.get('/', (req, res) => {
  res.render('quotation.ejs', {
    data: data,
  });
});

router.post('/trigger-function', (req, res) => {
  html2pdf();
  res.json({ message: 'Function executed' });
});

module.exports = router;
