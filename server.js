const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method == 'GET' && req.url.startsWith('/static')) {
    let urlParts = req.url.split('/');
    if (urlParts[1] == 'static' && urlParts[2] == 'images') {
      if (urlParts[3] == 'dog.jpg') {
        let image = fs.readFileSync('./assets/images/dog.jpg');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpg');

        return res.end(image);
      }
    }

    if (urlParts[1] == 'static' && urlParts[2] == 'css') {
      if (urlParts[3] == 'application.css') {
        let cssFile = fs.readFileSync('./assets/css/application.css');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');

        return res.end(cssFile);
      }
    }
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let indexFile = fs.readFileSync('./index.html');
  return res.end(indexFile);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
