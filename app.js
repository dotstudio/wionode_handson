'use strict';

const axios = require('axios');
const BASE_PATH = 'https://us.wio.seeed.io/v1/node'; // 自身のものをアプリで確認
const ACCESS_TOKEN = process.argv[2] || '';
const INTERVAL = 3000;

/**
 * 温度を取得
 *
 * @return {object}
 */
const getTemp = () => {
  const ENDPOINT = `/GroveTempA0/temp`;
  const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${ACCESS_TOKEN}`;
  return axios.request({method: 'GET', baseURL: BASE_URL});
}

/**
 * 取得した温度情報を表示する文字列に変換
 *
 * @param {number} temp
 * @return {string}
 */
const tempToDigit = (temp) => {
  let temp_str = `${temp}`;
  temp_str = temp_str.replace('.', '');
  if (temp_str.length >= 4) {
    temp_str = temp_str.substr(0, temp_str.length-1);
  }
  return `${temp_str}C`;
}

/**
 * ディスプレイに値を表示
 *
 * @param {number} start_pos
 * @param {strng} chars
 * @return {object}
 */
const fourDigit = (start_pos, chars) => {
  const ENDPOINT = `/Grove4DigitUART0/display_digits/${start_pos}/${chars}`;
  const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${ACCESS_TOKEN}`;
  return axios.request({method: 'POST', baseURL: BASE_URL})
}

/**
 * : を表示/非表示
 * @param {number} display 0|1
 * @return {object}
 */
const fourDigitPoint = (display) => {
  const ENDPOINT = `/Grove4DigitUART0/display_point/${display}`;
  const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${ACCESS_TOKEN}`;
  return axios.request({method: 'POST', baseURL: BASE_URL});
}

/**
 * メインの処理（同期）
 */
async function main() {
  let res = await getTemp();
  const temp = res.data.temperature;
  const text = tempToDigit(temp);
  console.log(text);
  res = await fourDigit(0, text);
  res = await fourDigitPoint(1);
}

/**
 * 繰り返し実行する
 */
setInterval(() => {
  main()
  .catch((e) => {
    if (e.response) console.log(e.response);
  })
}, INTERVAL);
