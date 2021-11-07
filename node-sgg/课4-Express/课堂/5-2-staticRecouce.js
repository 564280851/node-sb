// l20 express静态资源中间件-两种响应的方
// 静态资源
// - 资源内容长时间不发生改变的资源
// - 例如：HTML,css,Js,图片,字体,视频,音频
// 动态资源
// - 网页内容

const express = require("express");

const app = express();

//设置「静态资源服务」中间件-网站的根目录-响应静态资源
// 127.0.0.1默认 public/index.html
app.use(express.static(__dirname + "/public"));
// app.use(express.static("d:/project"));

//路由的方式响应动态资源
app.get("/", (req, res) => {
  res.send("网站首页");
});

// http://127.0.0.1
app.listen(80, () => {
  console.log(`Server running`);
});

// -静态资源服务中间件 - 设置网站的根目录;
