// - 需要拼接、没有ejs(用str拼接)
// -----------------------------

const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3001;

const data = ["吴亦凡", "罗志祥", "除思诚", "xx"];

const server = http.createServer((req, res) => {
  // 获取路径
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  //   判断路径
  if (pathname === "/man") {
    let str = `   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>男艺人列表</h2>
        <ul>`;

    // <li>${data[0]}</li>
    // <li>${data[1]}</li>
    // <li>${data[2]}</li>

    for (let i = 0; i < data.length; i++) {
      str += `<li>${data[i]}</li>`;
    }

    str += `</ul>
        </body>
        </html>`;
    res.end(str);
  } else {
    res.end(`<h1>404 NOT FOUND</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/man`);
});
