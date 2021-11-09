const express = require("express");
const app = express();

// 引用
const homeRouter = require("./routers/homeRouter");
const adminRouter = require("./routers/adminRouter");
// 使用
app.use(homeRouter);
app.use(adminRouter);

app.listen(80);
