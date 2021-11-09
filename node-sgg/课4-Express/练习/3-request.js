const express = require("express");
const app = express();

// http://127.0.0.1
app.get("/", (req, res) => {
  // console.log(req.method); //请求类型 get post
  // console.log(req.url); //
  // console.log(req.httpVersion);
  // console.log(req.headers); //请求头
  // console.log(req.headers["cache-control"]); //有-，所以用[] 方法1
  // console.log(req.get("cache-control")); // 获取指定请求头信息 方法2

  // http://127.0.0.1/?keyword=abc&age=12
  // console.log(req.query); // 获取url查询字符串
  // 返回{ keyword: 'abc', age: '12' }

  res.send("首页信息32");
});

// http://127.0.0.1/sb001.html
app.get("/:id.html", (req, res) => {
  res.send("这里是商品的详情，当前商品的id为" + req.params.id); //:id是点位符
});

app.listen(80, () => {
  console.log(`Server running`);
});

// request.query |获取get请求查询字符串的参数,拿到的是一个对象
// request.params |获取get请求参数路由的参数,拿到的是一个对象
// request.body |获取post请求体,拿到的是一个对象(要借助一个中间件)
// request.get(xxx) |获取请求头中指定key对应的value
