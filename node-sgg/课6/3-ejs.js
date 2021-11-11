// fs.readFileSync().toString();
// <% %>普通循环语句
// <%= %>变量赋值

// 引入ejs
const ejs = require("ejs");
const fs = require("fs");

//调用方法解析字符串
let people = ["ged", "neil", "alex"];
let html = ejs.render('<%= people.join(", "); %>', { people: people });
// console.log(html);

// 举例 变量拼接
// 准备数据
let star = "xxx";
// let str = `str${star}`; //字符串模板
// let str = "str===<%= star%>";

// 示例1 数据
// let str = fs.readFileSync(__dirname + "/3-1.html").toString();
// let result = ejs.render(str, { star: star });
// console.log(result);

// 示例2 列表框
// let arr = ["a", "b", "c", "d"];
// let str = fs.readFileSync(__dirname + "/3-2.html").toString();
// let result = ejs.render(str, { arr: arr });
// console.log(result);

// 示例3 表格
let data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];
let title = "用户列表";
let str = fs.readFileSync(__dirname + "/3-3.html").toString();
let result = ejs.render(str, { data, title });
console.log(result);
