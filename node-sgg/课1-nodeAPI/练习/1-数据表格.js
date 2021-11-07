// API
// - res.write() 可以有多个
// - res.end() 必需有，只能有一个
// - 使用``

// 原生API痛点
// - 加载静态css:不同的路径，不同的返回值
// - 需要拼接、没有ejs(用res.write()拼接)
//
// ------------------------------------------------
const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

// 数据
const data = [
  {
    id: 1,
    name: "孙燕姿",
    song: "逆光",
  },
  {
    id: 2,
    name: "周杰伦",
    song: "不能说的密码",
  },
  { id: 3, name: "林後杰", song: "不为谁而作的歌" },
  {
    id: 4,
    name: "五月天",
    song: "干杯",
  },
];

// get /songs 显示歌曲列表
// get /css/index.css 响应css文件内容
// get /css/app.css 响应css文件内容

const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, "http://127.0.0.1");
  if (pathname === "/songs") {
    res.write(`
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./css/index.css">
      <link rel="stylesheet" href="./css/app.css">
  </head>
  
  <body>
      <table border="1">
          <tr>
              <td>ID</td>
              <td>歌手</td>
              <td>歌曲</td>
          </tr>`);

    for (let i = 0; i < data.length; i++) {
      res.write(` <tr>
      <td>${data[i].id}</td>
      <td>${data[i].name}</td>
      <td>${data[i].song}</td>
      </tr>
      `);
    }

    res.write(`
          </table>
      </body>
      </html>`);
    res.end();
  } else if (pathname === "/css/index.css") {
    res.end(fs.readFileSync(__dirname + "/css/index.css"));
  } else if (pathname === "/css/app.css") {
    res.end(fs.readFileSync(__dirname + "/css/app.css"));
  } else {
    res.end(` <h1>404 NOT FOUND</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/songs`);
});
