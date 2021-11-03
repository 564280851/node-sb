"use strict";

const Controller = require("egg").Controller;

// http://127.0.0.1:7001/
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  // http://127.0.0.1:7001/jspang
  async jspang() {
    const { ctx } = this;
    ctx.body = "<h1>Hello JSPang</h1>";
  }
  // 07.Service 服务的编写
  // http://127.0.0.1:7001/testGetGirl?id=2000
  async testGetGirl() {
    const ctx = this.ctx;
    const id = ctx.query.id;
    const res = await ctx.service.jspang.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;
