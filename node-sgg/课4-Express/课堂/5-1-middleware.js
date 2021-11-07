// 说明：先执行中间件，后执行路由回调
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

// 1 声明中间件函数，next是下一个路由回调的引用
let recordMiddleware = (req, res, next) => {
  // 记录请求的时间和路径    [2021-07-20 10:10:10] /
  let time = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]`;
  // 获取url并对中文进行解码
  let ip = getClientIP(req);
  let path = decodeURI(req.url);
  let str = `${time} ${path} ${ip}\r\n`;
  // 写入文件中
  //  { flag: "a" }追加作用
  fs.writeFileSync(__dirname + "/access.log", str, { flag: "a" });
  // 调用next，指向下一个路由回调，固定写法
  next();
};

// 2 设置中间件
app.use(recordMiddleware);

app.get("/", (req, res) => {
  res.send("首页信息");
});
app.get("/list", (req, res) => {
  res.send("列表信息");
});
app.get("/cart", (req, res) => {
  res.send("购物车信息");
});

// http://127.0.0.1
app.listen(80, () => {
  console.log(`Server running`);
});



// - 中间件

//   - 就是函数
//   - 作用:代码复用,简化代码
//   - 应用场景:发现代码重复编写的时候

