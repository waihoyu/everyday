const fs = require('fs');
let data


try {
    data = fs.readFileSync('./f2.txt')
    console.log('文件读取完成')
    console.log("文件内容是：" + data)
} catch (error) {
    console.log(error.message);
}