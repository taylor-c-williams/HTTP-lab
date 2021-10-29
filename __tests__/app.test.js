const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('Responds to a get method on index with "hi"', async () => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });

  it('/echo returns status 200 and text/plain w req.body', async () => {
    const res = await request(app).post('/echo').send('echooo');
    expect(res.text).toEqual('echooo');
    expect(res.status).toEqual(200);
  });

  it('/red returns "red"', async () => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('/green returns "green"', async () => {
    const res = await request(app).get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('/blue returns "blue"', async () => {
    const res = await request(app).get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });
});
