'use strict'

const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    const { app } = this;
    return {
      id,
      name: "eli"
    }

  }
}

module.exports = UserService;