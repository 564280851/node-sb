const fs = require("fs");
const { createServer, request } = require("http");
const { url } = require("inspector");
const { listenerCount } = require("process");

// fs模块
// 文件操作
fs.m;
fs.writeFile;
fs.createWriteStream;
fs.readFile;
fs.createReadStream;
fs.unlink;
fs.rename;
// 文件夹操作
fs.mkdir();
fs.rmdir;
fs.readdir;
fs.Stats;

// http模块
http.createServer();
request;
Response;
server.listener;
method;
url;
headers;
pathname;
searchParam;

//
console.log(req.method);
console.log(req.url);
console.log(req.httpVersion);
console.log(req.headers);

let url = new url(req.url, "http://127.0.0.1");
let pathname = url.pathname;
let keyword = url.searchParams.get("keyword");

console.log(url);
console.log(pathname);
console.log(keyword);

console.log(res.statusCode);
console.log(res.statusMessage);

//   res.setHeader();
//   res.write();
