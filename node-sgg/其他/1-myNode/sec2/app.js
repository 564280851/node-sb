//l2-l7

//## 导入模块
//1 相对路径
//2 ./是必需的
//3 require 得到的结果就是目标模块中的module.exports的值

// const m0 = require('./m0');
// console.log(m0(2, 3));//m0=add

// const m1 = require('./m1');
// console.log(m1.add(1, 2));
// console.log(m1.minus(1, 2));

//## 导入数据
// const m2 = require('./m2');
// console.log(m2);//{ cls: 'H50510', pos: '3027' }

// const myJson = require('./myJson.json');//返回是object
// console.log(myJson, typeof myJson);

// 2 其他后缀 略

// 3 文件夹 略

// 4 内置模块
// const fs = require('fs');
// const http = require('http');

// 5 npm模块
// const moment = require('moment');
// console.log(moment().format('YYYY-MM-DD HH:MM:SS'));

// 6 自动向上查找 安装项目的根目录

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
