// 内置中间件 设置网站的根目录 public文件夹

// 静态资源 资源内容长时间不发生改变的资源 例如：HTML,css,Js,图片,字体,视频,音频
// 动态资源 网页内容

const express = require("express");
const app = express();

// 如果请求路径为/的话,会自动响应网站根目录下的index.html
// // http://127.0.0.1/   方法1
// // http://127.0.0.1/index.html   方法2

app.use(express.static(__dirname + "/public"));

// 设置「动态资源服务」
// http://127.0.0.1/home
app.get("/home", (req, res) => {
  res.send("网站首页");
});

//http://127.0.0.1/fish
app.get("/fish", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(80, () => {
  console.log(`Server running`);
});
