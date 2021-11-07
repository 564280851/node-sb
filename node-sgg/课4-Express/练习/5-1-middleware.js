const express = require("express");
const moment = require("moment");
const fs = require("fs");

const app = express();

/**
 * @getClientIP
 * @desc 获取用户 ip 地址
 * @param {Object} req - 请求
 */
function getClientIP(req) {
  return (
    req.headers["x-forwarded-for"] || // 判断是否有反向代理 IP
    req.connection.remoteAddress || // 判断 connection 的远程 IP
    req.socket.remoteAddress || // 判断后端的 socket 的 IP
    req.connection.socket.remoteAddress
  );
}

// 声明中间件函数
// 作用:代码复用,简化代码
// next指向下一个路由回调
let recordMiddleware = (req, res, next) => {
  let time = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
  let path = decodeURI(req.url);
  let ip = getClientIP(req);
  let str = `${time} ${path} ${ip}\r\n`;
  fs.writeFileSync(__dirname + "/access.log", str, { flag: "a" });
  next();
};

// 2 设置中间件
app.use(recordMiddleware);

// http://127.0.0.1
app.get("/", (req, res) => {
  res.send("首页信息");
});
// http://127.0.0.1/list
app.get("/list", (req, res) => {
  res.send("列表信息");
});
// http://127.0.0.1/cart
app.get("/cart", (req, res) => {
  res.send("购物车信息");
});

app.listen(80, () => {
  console.log(`Server running`);
});
