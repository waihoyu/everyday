const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
const inFile = fs.createReadStream('./a.txt.gz')
const server = http.createServer((req, res) => {
    a = 0
    if (req.headers['accept-encoding'].indexOf('gzip1') >= 0) {
        gzip = zlib.createGzip();
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8', 'Content-Encoding': 'gzip' })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res)
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
        fs.createReadStream('./a.txt').pipe(res)
    }
})
server.listen(8085)