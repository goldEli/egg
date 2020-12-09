'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.info);
    ctx.body = 'hello, world!';
  }
  async demo() {
    const { ctx } = this;
    console.log(ctx.info);
    ctx.body = 'this is demo';
  }
  async newApplication() {
    const { ctx, app } = this;
    // console.log(app.package("author"));
    console.log(app.allPackage)
    ctx.body = 'newApplication';
  }
  async newContext() {
    const { ctx } = this;
    console.log("params:", ctx.getParams())
    ctx.body = 'newContext';
  }
  async newRequest() {

    const { ctx } = this;
    console.log("request:", ctx.request.token)
    console.log("base64", ctx.helper.base64Encode('newContext'))
    ctx.body = 'newContext';
  }
}

module.exports = HomeController;
