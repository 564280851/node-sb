'use strict';

const { app } = require('egg-mock/bootstrap');

describe('jspang-test', () => {
  //   同步单元测试
  it('jspang-index', () => {
    return app
      .httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>I am  JSPang</h1>');
  });

  //   异步单元测试
  //   async关键字，这就是异步代码测试的关键。
  it('jspang-getGirls', async () => {
    await app
      .httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>杨幂，正在向你走来</h1>');
  });
});

// describe( )方法有两个参数，
// 第一个是测试的描述（字符串类型），这个描述一般都是用文件的路径。
// 第二个参数是一个回调函数，里边是对这个控制器里边的具体方法的测试用例。
