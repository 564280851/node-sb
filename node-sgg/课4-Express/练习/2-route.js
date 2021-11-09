// 方法1
// res.setHeader("Content-Type", "text/html;charset=utf-8");
// res.end("中国");
// 方法2,不用设置字符集
// res.send("首页信息");

// * 没有找到匹配时用
// all可以接受get或post
// res.send("这里一个404页面");

// 此处是80端口，post不需要指定端口
// 此处”不是“80端口，post指定端口

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("首页信息");
});
app.post("/login", (req, res) => {
  res.send("登录信息");
});
app.all("*", (req, res) => {
  res.send("这里一个404页面");
});

// http://127.0.0.1
app.listen(80, () => {
  console.log(`Server running`);
});
