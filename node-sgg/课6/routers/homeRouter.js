// 引入
const express = require("express");
// 创建路由对象
const router = express.Router();

// 配置规则
// router.get,不是app.get
router.get("/", (req, res) => {
  res.send("home");
});

router.get("/cart", (req, res) => {
  res.send("cart");
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/signup", (req, res) => {
  res.send("signup");
});

// 暴露对象
module.exports = router;
