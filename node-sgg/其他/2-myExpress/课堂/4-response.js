// l17 express框架的响应方式
const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 80;

app.get("/", (req, res) => {
  // res.statusCode = 404;
  // res.statusMessage = "abc";
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.download("./package.json");//下载文件//只能单独使用
  // res.send("4-response");
  // res.sendFile(__dirname + "/index.html"); //显示指定文件//响应体
  // res.redirect("https://www.baidu.com/?tn=64075107_1_dg");//重定向//响应头
  // res.status(400);//要和res.send一起使用
  // res.set("class", "===");//要写在res.send前面
  res.send("abc111");
  //返回json
  //   res.json({
  //     name: "abc",
  //     pos: ["北京", "上海"],
  //   });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
