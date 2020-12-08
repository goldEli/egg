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

    const res = await ctx.service.user.detail(10)
    
    console.log(res)
    ctx.body = ctx.query.id
  }
  async detail2() {
    const {ctx} = this
    
    ctx.body = ctx.params.id
  }
  async add() {
    const {ctx} = this
    const rule = {
      name: {type: 'string'},
      age: {type: 'number'}
    } 
    ctx.validate(rule)
    ctx.body = {
      status: 200,
      data: ctx.request.body
    }
  }
  async edit() {
    const {ctx} = this
    
    ctx.body = ctx.request.body
  }
  async del() {
    const {ctx} = this
    
    ctx.body = ctx.request.body
  }
}

module.exports = UserController;
