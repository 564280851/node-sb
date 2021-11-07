// 导入模块
// ./是必需的
// 相对路径
// require 得到module.exports的值

// 只暴露1个函数
// const m1 = require('./m1');
// console.log(m1(2, 3));//m1=add

// 只暴露多个函数,导入是对象
// const m1 = require("./m1");
// console.log(m1.add(1, 2));
// console.log(m1.minus(1, 2));

// ## 导入数据,导入是对象
// const m2 = require("./m2");
// console.log(m2);//{ cls: 'H50510', pos: '3027' }

// const data = require("./data.json"); //返回是object
// console.log(data);
// console.log(typeof data);

// 内置模块
// const fs = require('fs');
// const http = require('http');

// npm模块
// const moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:MM:SS'));

// 自动向上查找 安装项目的根目录

/*
总结：
如果没有加文件后缀,会按照以下后缀加载文件
.js fs模块同步读取文件编译执行
.json fs模块同步读取文件,用JSON.parse()解析返回结果
.node这是cc++编写的扩展文件,通过dlopen()方法编译
其他扩展名 会以js文件载入
如果是"文件夹"则会默认加载该文件夹下 package.json文件中main属性对应的文件
如果main属性对应的文件不存在,则自动找 index.js index.json
npm引入包时,如果当前文件夹下的node_ modules没有,则会自动向上查找
 */
