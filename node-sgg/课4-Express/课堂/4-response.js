const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // 在chrome-network
  // res.statusCode = 404;//不用 方法1
  // res.status(404);//和res.send一起使用 方法2

  // res.statusMessage = "sb001";//不用
  // res.setHeader("Content-Type", "text/html;charset=utf-8");//不用 方法1
  // res.set("class", "===");//要写在res.send前面 方法2

  // res.sendFile(__dirname + "/index.html"); //显示指定文件
  // res.redirect("https://www.baidu.com"); //重定向
  res.send("home");

  //返回json
  // res.json({
  //   name: "abc",
  //   pos: ["北京", "上海"],
  // });
});

// http://127.0.0.1/download
app.get("/download", (req, res) => {
  res.download(__dirname + "/download"); //下载文件 只能单独使用
});

// http://127.0.0.1
app.listen(80, () => {
  console.log(`Server running`);
});

// response.send()//给浏览器做出一个响应
// response.end()//给浏览器做出一个响应(不会自动追加响应头)
// response.download()//告诉浏览器下载一个文件
// response.sendFile()//给浏览器发送一个文件
// response.redirect()//重定向到一个新的地址
// response.set(header,value)//自定义响应头内容
// res.status(code)//设置响应状态码
