"use strict";

const Controller = require("egg").Controller;
const info = require("../utils/info")

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.info)
    ctx.body = "hello, world!";
  }
  async demo() {
    const { ctx } = this;
    console.log(ctx.info)
    ctx.body = "this is demo";
  }
}

module.exports = HomeController;
