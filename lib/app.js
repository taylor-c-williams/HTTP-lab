const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer((socket) => {
  socket.on('data', (data) => {
    const request = parseRequest(data.toString());

    if (request.method === 'GET' && request.path === '/') {
      socket.write(
        createResponse({
          body: 'hi',
          status: '200 OK',
          contentType: 'text/plain'
        })
      );
    } else if (request.method === 'POST' && request.path === '/echo') {
      socket.write(
        createResponse({
          body: request.body,
          status: '200 OK',
          contentType: 'text/plain'
        })
      );
    } else if (request.method === 'GET' && request.path === '/red') {
      socket.write(
        createResponse({
          body: '<h1>red</h1>',
          status: '200 OK',
          contentType: 'text/plain'
        })
      );
    } else if (request.method === 'GET' && request.path === '/green') {
      socket.write(
        createResponse({
          body: '<h1>green</h1>',
          status: '200 OK',
          contentType: 'text/plain'
        })
      );
    } else if (request.method === 'GET' && request.path === '/blue') {
      socket.write(
        createResponse({
          body: '<h1>blue</h1>',
          status: '200 OK',
          contentType: 'text/plain'
        })
      );
    }
    socket.end(
      createResponse({
        body: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Nope!</title>
        </head>
        <body>
          <img src="https://www.artzstudio.com/content/images/wordpress/2020/05/404-error-not-found-page-lost.png" alt="This page has been abducted by aliens" />
        </body>
        </html>`,
        status: '404 Not Found',
        contentType: 'text/plain'
      })
    );
  });
});

module.exports = app;
