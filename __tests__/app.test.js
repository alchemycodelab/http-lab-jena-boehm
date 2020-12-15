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

  it('returns html with an h1 and the word red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('returns html with an h1 and the word green', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<h1>green</h1>');
  });

  it('returns html with an h1 and the word blue', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual('<h1>blue</h1>');
  });
});
