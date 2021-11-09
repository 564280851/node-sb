const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
// app.use(require("cors")());

// http://127.0.0.1/string
app.get("/string", (req, res) => {
  res.send("首页信息");
});

// http://127.0.0.1/login
app.post("/login", (req, res) => {
  res.send("登录信息");
});

// http://127.0.0.1/object
app.get("/object", (req, res) => {
  res.send({ page: "首页信息" });
});

// http://127.0.0.1/array
app.get("/array", (req, res) => {
  res.send([
    { id: 1, title: "Product a" },
    { id: 2, title: "Product b" },
    { id: 3, title: "Product c" },
  ]);
});

app.all("*", (req, res) => {
  res.send("这里一个404页面");
});

app.listen(80, () => {
  console.log(`Server running`);
});
