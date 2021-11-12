const express = require("express");

const app = express();

app.set("view engine", "ejs"); //引用ejs
app.set("views", __dirname + "/templates"); //设置模板文件的位置

// app.use(express.static(__dirname + "/public"));
//__dirname文件所在目录的路径

// http://127.0.0.1/home
app.get("/home", (req, res) => {
  let data = ["a", "b", "c", "d"];
  //   res.send("模版名称"，'数据');
  res.render("abcd", { data }); //render, NOT send
});

app.listen(80, () => {
  console.log(`Server running`);
});
