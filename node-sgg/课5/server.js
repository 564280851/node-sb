const express = require("express");
const app = express();

// singers是一个数组
const singers = require("./singers.json").req_1.singersList;

// http://127.0.0.1/singer/4558
app.get("/singer/:id", (req, res) => {
  let id = req.params.id; //获取请求id
  let data = null; //声明一个变量
  for (let i = 0; i < singers.length; i++) {
    //遍历数组
    if (singers[i].singer_id == id) {
      //条件判断
      data = singers[i];
      console.log(data);
    }
  }
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <style>
      img{
          border-radius: 50%;
          overflow: hidden;
      }
  </style>
  </head>
  <body>
      <h2>${data.singer_name}</h2>
      <img src="${data.singer_pic}" alt="" style="width: 200px;" srcset="">
  </body>
  </html>`);
});

// http://127.0.0.1
app.listen(80, () => {
  console.log(`Server running`);
});
