const   AipOcrClient = require('baidu-aip-sdk').ocr;
const fs = require('fs');
const image = fs.readFileSync("car2.jpeg").toString("base64");
// 内置模块 fileSystem

// 1. 读入文件 I/O   从硬盘读入内存中，
const APP_ID = "24902586";
const API_KEY = "ABgv19Hdex2RH6VfOUZiyF6n";
const SECRET_KEY = "1CYfAshvCuvbCjGcYXNVgL2INUAR98yB";

const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);
const options = {};
options["multi_detect"] = true;

client
    .licensePlate(image, options)
    .then(function(result) {
        console.log(result);
    })
    .catch(function(err) {
        console.log(err);
    })
