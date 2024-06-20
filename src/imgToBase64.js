const axios = require('axios');

async function imgToBase64(url) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    // console.log(base64Image);
    return base64Image;
  } catch (error) {
    console.error('Error converting image to base64:', error);
  }
}

module.exports = imgToBase64;
