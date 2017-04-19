'use strict';

const axios = require('axios');
const TOKEN = process.argv[2] || '';
const BASE_PATH = `https://us.wio.seeed.io/v1/node`;
const ENDPOINT = `/GroveTempA0/temp`;
const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${TOKEN}`;

axios.request({
    method: 'get',
    baseURL: BASE_URL
}).then((res) => {
    console.log(res.data);
})
.catch((error) => {
    console.log(error.response.data);
});