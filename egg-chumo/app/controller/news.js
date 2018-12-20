'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const data = {
      userName: 'chumo',
      age: '18',
    };
    await ctx.render('news/list', data);
  }
}

module.exports = NewsController;
