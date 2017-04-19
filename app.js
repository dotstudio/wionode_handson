'use strict';

const axios = require('axios');
const TOKEN = process.argv[2] || '';
const BASE_PATH = `https://us.wio.seeed.io/v1/node`;
const INTERVAL = 3000;

/**
 * 温度取得
 */
const getTemp = () => {
    const ENDPOINT = `/GroveTempA0/temp`;
    const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${TOKEN}`;
    return axios.request({method: 'get', baseURL: BASE_URL});
}

/**
 * 温度情報を文字列変換+Cを追加
 * @param {number} temp
 * @param {string}
 */
const temp2digit = (temp) =>{
    let temp_str = `${temp}`;
    temp_str = temp_str.replace('.','');
    if(temp_str.length >= 4){
        temp_str = temp_str.substr(0,temp_str.length-1);
    }
    return `${temp_str}C`;
}

/**
 * :を表示/非表示
 * @param {number} display - 0 or 1
 */
const fourDigitPoint = (display) => {
    const ENDPOINT = `/Grove4DigitUART0/display_point/${display}`;
    const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${TOKEN}`;
    return axios.request({method: 'post', baseURL: BASE_URL});
}

/**
 * ディスプレイに表示させる
 * @param {number} start_pos
 * @param {string} chars
 */
const fourDigit = (start_pos, chars) => {
    const ENDPOINT = `/Grove4DigitUART0/display_digits/${start_pos}/${chars}`;
    const BASE_URL = `${BASE_PATH}${ENDPOINT}?access_token=${TOKEN}`;
    return axios.request({method: 'post', baseURL: BASE_URL});
}

/**
 * メインの処理 (同期)
 */
async function main(){
   const res = await getTemp();
   const temp = res.data.temperature;
   const text = temp2digit(temp);
   console.log(text);
   res = await fourDigit(0,text);
   res = await fourDigitPoint(1);
}

/**
 * 繰り返し実行
 */
setInterval(()=>{
    main()
    .catch((e)=>{
        if(e.response) console.log(e.response);
    })
},INTERVAL);
