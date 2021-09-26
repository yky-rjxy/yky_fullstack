// console.log('AI 来了， 帅！')
// require 是node 引入模块的关键字，node_modules里有的可以用require引入
// 图像识别
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;
// 内置模块 fileSystem
const fs = require('fs');
// 1. 读入文件 I/O   从硬盘读入内存中，
const APP_ID = "24902437";
const API_KEY = "4ghPjvRLl0MNWnGxTjG550le";
const SECRET_KEY = "wgPwjurHX5sAq5sPEn0GZbCAo2gzk6hH";

const client = new ApiImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
// const fs = require('fs');
// 同步读取
const image = fs.readFileSync("timg.jpeg").toString("base64");

client
    .carDetect(image)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err)
    })
