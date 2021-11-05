// l12没有

const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 80;

// l13 express获取报文数据
app.get("/", (req, res) => {
  // console.log(req.method);
  // console.log(req.url);
  // console.log(req.httpVersion);
  // console.log(req.headers);
  // console.log(req.headers['cache-control']);//因为有-，所以用[]

  // 获取url查询字符串
  // console.log(req.query);
  // url=http://127.0.0.1/?keyword=abc&age=12
  // { keyword: 'abc', age: '12' }

  // 获取指定请求头信息
  // console.log(req.get("accept"));

  res.send("首页信息22");
});

// l14 express的路由传参
//:id是点位符
app.get("/:id.html", (req, res) => {
  res.send("这里是商品的详情，当前商品的id为" + req.params.id);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// l15 hosts文件修改-使用域名访问本地服务
// ip 127.0.0.1设定域名，略
// 访问 127.0.0.1 http服务是打开状态

// l16 根据域名查找对应的 「IPJ , DNS解析,域名解析
