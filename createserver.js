const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  response.write('<h1>hello</h1>');
  response.end('<h2>taek</h2>');
})

server.listen(8080)

server.on('listening', () => {
  console.log('8080포트');
})