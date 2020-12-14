const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('returns hi via GET', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });
});
