// commonjs require NODE 内置 支持的js 模块化方案

// es6 module
// sea.js


const fs = require('fs');

let data;

let pr = new Promise((resolve, reject) => {
    data = fs.readFile('./f2.txt', 'utf8', (err, data) => {
        if (err == null) {
            console.log('真正地开始读取文件...');
            console.log('文件的内容' + data);
            resolve(data);
        } else {
            reject(err);
        }
    })
});

pr.then(data => console.log("读取完成！")).catch(
    e => console.log(e));