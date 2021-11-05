// l10 express的初体验
const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.end("hello world");
});
app.get("/login", (req, res) => {
  res.end("login page");
});
const hostname = "127.0.0.1";
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
