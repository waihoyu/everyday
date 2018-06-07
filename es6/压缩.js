var fs = require('fs')
var zlib = require('zlib')

var gzip = zlib.createGzip()
var gi = zlib.createGzip()

var inFile = fs.createReadStream('C:\\Users\\lenovo\\Downloads\\f.txt')
var out = fs.createWriteStream('C:\\Users\\lenovo\\Downloads\\f.txt.gz')

inFile.pipe(gzip).pipe(out)