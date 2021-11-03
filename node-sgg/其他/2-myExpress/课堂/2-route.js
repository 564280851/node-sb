// l11 express的路由功能
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // 设置响应头
  // end不使用
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.end("中国");

  res.send("首页信息");
});
app.post("/login", (req, res) => {
  res.send("登录信息");
});

// all配合* 兜底作用
// * 没有找到匹配时用
// all可以接受get或post
app.all("*", (req, res) => {
  res.send("这里一个404页面");
});

const hostname = "127.0.0.1";
// 此处是80端口，post不需要指定端口
// 此处”不是“80端口，post指定端口
const port = 80;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
