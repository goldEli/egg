'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    const { app } = this;
    return {
      id,
      name: 'eli',
    };
  }
  async detail2(id) {
    const { app } = this;
    try {
      const res = await app.mysql.get('user', { id });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  async lists() {
    const { app } = this;
    try {
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

module.exports = UserService;
