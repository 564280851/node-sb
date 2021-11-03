"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;

  router.get("/", controller.home.index);
  router.get("/jspang", controller.home.jspang);
  router.get("/testGetGirl", controller.home.testGetGirl);

  router.get("/my", controller.jspang.index);
  router.get("/getGirls", controller.jspang.getGirls);
  // get自由传参模式
  router.get("/getGirl1", controller.jspang.getGirl1);
  // get严格传参模式 优先选用
  router.get("/getGirl2/:name/:age", controller.jspang.getGirl2);
  router.get("/getGirl3/", controller.jspang.getGirl3);

  // post
  router.post("/addPost", controller.jspang.addPost);

  // 操作cookie
  router.post("/add", controller.jspang.add);
  router.post("/del", controller.jspang.del);
  router.post("/editor", controller.jspang.editor);
  router.post("/show", controller.jspang.show);
};
