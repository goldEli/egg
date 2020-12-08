'use strict';

module.exports = app => {
  console.log('egg init');
  app.messenger.on('agentAction', data => {
    console.log(data);
  });
  const store = {};

  app.sessionStore = {
    async get(key) {
      console.log('--store--', store[key]);
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };

  app.config.coreMiddleware.push('auth');
};
