const http = require('http');
//创建一个web 服务器
const fs = require('fs');
const indexFile = fs.createReadStream("./index.html");
const server = http.createServer((req, res) => {
    // res.end("hello world");
    if (req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        indexFile.pipe(res);
    } else if (req.url == '/info') {
        // api
        const info = {
            "name": "北京",
            "desc": "身骑白马"
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end(JSON.stringify(info));
    }
});

server.listen(8082);