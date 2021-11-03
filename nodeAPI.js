const fs = require('fs');
const { createServer, request } = require('http');
const { url } = require('inspector');
const { listenerCount } = require('process');

// fs模块
// 文件操作
fs.writeFile
fs.createWriteStream
fs.readFile
fs.createReadStream
fs.unlink
fs.rename
// 文件夹操作
fs.mkdir
fs.rmdir
fs.readdir
__dirname
fs.Stats

// http模块
require
createServer
request
Response
listener
method
url
headers
pathname
searchParam
