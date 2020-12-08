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
  async detail() {
    const {ctx} = this
    
    ctx.body = ctx.query.id
  }
  async detail2() {
    const {ctx} = this
    
    ctx.body = ctx.params.id
  }
}

module.exports = UserController;
