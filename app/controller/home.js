"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hello, world!";
  }
  async demo() {
    const { ctx } = this;
    ctx.body = "this is demo";
  }
}

module.exports = HomeController;
