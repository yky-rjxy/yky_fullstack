const fs = require('fs');
// fs.readFile('./text.txt',function(err, data) {
//     // console.log(err);
//     if (err) {
//         throw new Error(err)
//         return
//     }
//     console.log(data.toString())
// })

// 异步读取
fs.readFile('./timg.jpeg',function(err, data) {
    // console.log(err);
    if (err) {
        throw new Error(err)
        return
    }
    console.log(data)
})