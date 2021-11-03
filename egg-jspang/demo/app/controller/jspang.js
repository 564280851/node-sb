"use strict";

const Controller = require("egg").Controller;

// 测试http://127.0.0.1:7001/my
class JspangController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = '<h1>I am  JSPang</h1>';

    await ctx.render("jspang.html", {
      id: 2021,
      name: "小红",
      age: 18,
      skills: ["泰式按摩", "精油搓背", "水疗SPA"],
    });
  }
  // 04.Egg.js单元测试介绍-编写异步方法
  // 测试http://127.0.0.1:7001/getGirls
  // setTime( )方法来模拟数据需要5秒钟后，才会返回页面结果。
  async getGirls() {
    const { ctx } = this;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve((ctx.body = "<h1>杨幂，正在向你走来111</h1>"));
      }, 2000);
    });
  }

  // get自由传参模式
  // ctx.query就是获得传递的参数
  // 测试http://127.0.0.1:7001/getGirl1
  // 测试http://127.0.0.1:7001/getGirl1?name=小红
  // 测试http://127.0.0.1:7001/getGirl1?name=小红&age=20
  async getGirl1() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }

  // 07.Service服务的编写
  // http://127.0.0.1:7001/getGirl3?id=1818
  async getGirl3() {
    const { ctx } = this;
    const res = await ctx.service.jspang.getGirl("1818");
    ctx.body = res;
  }
  // get严格传参模式 优先选用
  // 传递的参数个数是固定的，你传递参数顺序是固定的，你传递的参数名称是固定的。
  // ctx.params是获取所有的传递参数，ctx.params.name是获取传递参数的name值。
  // 这时候的访问URL不在是用?来开始传递参数了，而是直接用/ 左斜杠来传递。
  // 测试http://127.0.0.1:7001/getGirl2    -无法访问
  // 测试http://127.0.0.1:7001/getGirl2/小红/14
  async getGirl2() {
    const { ctx } = this;
    const name = ctx.params.name;
    const age = ctx.params.age;
    ctx.body = "大哥你好，我是" + name + ",今年" + age + "岁.欢迎光临红浪漫!";
  }

  // post
  /*   
  CSRF安全策略，学习阶段，我们可以关闭掉这个选项。
  关闭掉CSRF。
  CSRF的全名为 Cross-site request forgery， 它的中文名为 伪造跨站请求

  config.security = {
      csrf :{
        enable:false,
      }
    }
     */
  async addPost() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
    // ctx.body = "add page";
  }

  // 4个方法操作cookie
  async add() {
    const ctx = this.ctx;
    // ctx.cookies.set("user", "jspang.com");
    
    ctx.cookies.set("user", "jspang.com", {
      maxAge: 1000 * 2,
    });
    ctx.body = {
      status: 200,
      data: "Cookie添加成功",
    };
  }
  async del() {
    const ctx = this.ctx;
    ctx.cookies.set("user", null);
    ctx.body = {
      status: 200,
      data: "Cookie删除成功",
    };
  }
  async editor() {
    const ctx = this.ctx;
    ctx.cookies.set("user", "bilibili");
    ctx.body = {
      status: 200,
      data: "Cookie修改成功",
    };
  }
  async show() {
    const ctx = this.ctx;
    const user = ctx.cookies.get("user");
    console.log(user);
    ctx.body = {
      status: 200,
      data: "Cookie显示成功",
    };
  }
}

module.exports = JspangController;
