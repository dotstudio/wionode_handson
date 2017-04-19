'use strict';

const axios = require('axios');
const TOKEN = process.argv[2] || '';
const display = process.argv[3] || 1;
const BASE_PATH = `https://us.wio.seeed.io/v1/node`;
const ENDPOINT = `/Grove4DigitUART0/display_point/${display}`;
const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${TOKEN}`;

axios.request({
    method: 'post',
    baseURL: BASE_URL
}).then((res) => {
    console.log(res.data);
})
.catch((error) => {
    console.log(error.response.data);
});