// body-parser的使用
// 用form.html来访问

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  console.log(req.body); //输出对象
  console.log(req.body.username); //输出属性值
  res.send("ok");
});

app.listen(80);
