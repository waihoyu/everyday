const http = require('http');
//创建一个web 服务器
const fs = require('fs');
const indexFile = fs.createReadStream("./index.html");
const server = http.createServer((req, res) => {
    res.end("hello world");
    if (req.url == '/') {

    }
});

server.listen(8081);