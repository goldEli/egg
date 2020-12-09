'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const user = ctx.cookies.get('user');
    const session = ctx.session.user;
    console.log('session', session);
    await ctx.render('user.html', {
      id: 100,
      name: 'ele',
      lists: ['apple', 'hawei', 'xiaomi'],
      user: typeof user === 'string' && JSON.parse(user),
    });
  }
  async login() {
    const { ctx } = this;
    const { body } = ctx.request;
    ctx.cookies.set('zh', '中文', {
      encrypt: true,
    });
    const zh = ctx.cookies.get('zh', {
      encrypt: true,
    });
    ctx.session.user = body;
    ctx.cookies.set('user', JSON.stringify(body), {
      maxAge: 1000 * 60 * 10,
      httpOnly: false,
    });
    ctx.body = {
      status: 200,
      data: body,
    };
  }
  async logout() {
    const { ctx } = this;
    ctx.cookies.set('user', '');
    ctx.body = {
      status: 200,
    };
  }
  async lists() {
    const { ctx } = this;
    const lists = await ctx.service.user.lists();
    ctx.body = lists;
  }
  async detail() {
    const { ctx } = this;

    const res = await ctx.service.user.detail(10);

    ctx.body = res;
  }
  async detail2() {
    const { ctx } = this;
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = res;
  }
  async add() {
    const { ctx } = this;
    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    const res = await ctx.service.user.add(ctx.getParams());
    ctx.body = {
      status: 200,
      data: res,
    };
  }
  async edit() {
    const { ctx } = this;
    const res = await ctx.service.user.edit(ctx.getParams());
    ctx.body = {
      status: 200,
      data: res,
    };
  }
  async del() {
    const { ctx } = this;
    const res = await ctx.service.user.del(ctx.getParams("id"));
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = UserController;
