// 引入
const express = require("express");
// 创建路由对象
const router = express.Router();

// 配置规则
// router.get,不是app.get
router.get("/admin", (req, res) => {
  res.send("admin");
});

router.get("/setting", (req, res) => {
  res.send("setting");
});

// 暴露对象
module.exports = router;
