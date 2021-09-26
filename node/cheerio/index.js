// let request = require('request-promise'); // 第三方npm
// const https = require("https"); // 内置
const fetch = require("node-fetch"); 
let cheerio = require('cheerio');
let url = 'http://movie.douban.com/top250';
const main = async() => { // async 关键字
    // let html = await request({ // 等着去爬一下
    //     url
    // });
    // console.log(html);

    // http
    //     .get(url)
    //     .then(data => {
    //         console.log(data);
    //     })

    fetch(url)
        .then(res => res.text())
        .then(body => {
            let $ = cheerio.load(body);
            let movieNodes = $('#content .item');
            console.log(movieNodes)
        });
}
main();