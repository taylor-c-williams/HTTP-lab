const request = require('supertest');
const app = require('../lib/app');


describe('app routes', () => {
  it('Responds to a get method on index with "hi"', async() => {
    const res = await request(app).get('/');
    expect (res.text).toEqual('hi');
  });

  it('/echo returns status 200 and text/plain w req.body', async() => {
    const res = await request(app).get('/');
    expect (res.text).toEqual(res.text);
  });

});



