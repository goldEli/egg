const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:7001/', { dataType: 'text' });
    console.log(res);
    ctx.body = {
      status: 200,
      data: res.data,
    };
  }
  async curlPost() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:7001/user/login', { 
      method: "POST",
      contentType: "json",
      data: ctx.query,
      dataType: "json"
     });
    console.log("curlPost:", res);
    ctx.body = {
      status: 200,
    };
  }
}

module.exports = CurlController;
