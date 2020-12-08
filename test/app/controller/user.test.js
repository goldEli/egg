'use strict';

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });
  it('user lists', async () => {
    return app.httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":"1","name":"eli"}]')

  })
});

