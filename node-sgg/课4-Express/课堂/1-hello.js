// 引入
const express = require("express");

// 创建应用
const app = express();

// 路由
app.get("/home", (req, res) => {
  res.end("hello world");
});
app.get("/login", (req, res) => {
  res.end("login page");
});

// 监听
// http://127.0.0.1/home
app.listen(80, () => {
  console.log(`Server running`);
});
