'use strict';

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', () => {
    return app.httpRequest().get('/user').expect(200).expect('user index');
  });
  it('user lists', async () => {
    return app
      .httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":"1","name":"eli"}]');
  });
  it('user detail', async () => {
    return app
      .httpRequest()
      .get('/user/detail?id=123')
      .expect(200)
      .expect('123');
  });
  it('user detail2', async () => {
    return app.httpRequest().get('/user/detail2/100').expect(200).expect('100');
  });
  it('user add post', async () => {
    return app
      .httpRequest()
      .post('/user/add')
      .send({
        age: 11,
        name: 'eli',
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          age: 11,
          name: 'eli',
        },
      });
  });
});
