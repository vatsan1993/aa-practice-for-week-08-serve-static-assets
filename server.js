const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Your code here
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let indexFile = fs.readFileSync('./index.html');
  res.end(indexFile);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
