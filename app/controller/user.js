'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
  }
  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
    ctx.body = [{ id: '1', name: 'eli' }];
  }
}

module.exports = UserController;
