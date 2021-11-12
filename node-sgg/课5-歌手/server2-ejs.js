const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs"); //引用ejs
app.set("views", __dirname + "/templates"); //设置模板文件的位置

// http://127.0.0.1/singer/list  /4558
app.get("/singer/list", (req, res) => {
  const {
    req_1: {
      data: { singersList },
    },
  } = require("./singers.json");
  // console.log(singersList);
  res.render("singers", { singersList });
});

app.listen(80, () => {
  console.log(`Server running`);
});
