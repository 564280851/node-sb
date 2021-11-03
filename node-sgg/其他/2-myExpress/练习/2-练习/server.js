// l21 express响应内容的练习
// 内容：网页中显示一张图片
// 常见网站根目录名称：public www
const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 80;

// public文件夹中有index.html时
// 如果请求径为/的话,会自动打开网站根目求下的index.html
// - url:http://127.0.0.1
// 访问路径是index.html-和图片放在一个文件夹中
//设置静态资源的中间件

// app.use(express.static(__dirname + "/public"));

// l22 express响应PC项目的页面
// 如果请求径为/的话,会自动打开网站根目求下的index.html
// app.use(express.static("C:/Users/abc/Desktop/sb"));

// sendFile只能用绝对路径
//声明一个路由规则
app.get("/server", (req, res) => {
  res.sendFile(__dirname + "/page.html");
  //   page.html的文件路径要省略 static 的路径★★★★★
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
