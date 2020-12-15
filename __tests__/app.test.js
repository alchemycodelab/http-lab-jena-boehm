const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('returns hi via GET', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('returns status code 200 and plain text with the request body via POST', async() => {
    const response = await request(app)
      .post('/echo')
      .send('hi');
    expect(response.text).toEqual('hi');
  });
});
