'use strict';

/**
 * 应用在启动的时候做的一些初始化操作
 * @param {*} app
 * app应用实例, 对于框架内置对象： Application, 继承自Koa.Application, 挂在一些全局方法或者属性
 * Context: 上下文对象， 对应this.ctx，获取到挂载到ctx上的request,response, controller, service, middleware, query等业务相关的
 */
module.exports = app => {
  app.beforeStart(async () => {
    const ctx = app.createAnonymousContext();
    console.log('应用启动时.......');
    await ctx.service.news.getTopInvite();

    // 监听事件
    app.on('error', (err, ctx) => {
      console.log('error attach');
      console.log(err);
    });

    app.on('request', ctx => {
      console.log('请求来了');
    });

    app.on('response', ctx => {
      console.log("响应来了");
    });
  });
};
