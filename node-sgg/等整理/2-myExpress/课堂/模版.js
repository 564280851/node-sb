const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 80;

app.get("/", (req, res) => {
  res.send("首页信息22");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
