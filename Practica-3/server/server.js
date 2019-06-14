var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, resp) => {
  url = ('.' + req.url);

  if (url == './') {
    url = './templates/tienda.html'
  }

  urlArray = url.split('.');
  extension = urlArray[urlArray.length-1];
  console.log(extension);

  fs.readFile(url, (err, resource) => {
    if (err) {
      resp.writeHead(404);
      resp.end('Content not found')
    }else{
      if (extension == 'html') {
        resp.writeHead(200, {'Content-Type': 'text/html'});
        resp.end(resource);
      }
      if (extension == 'css') {
        resp.writeHead(200, {'Content-Type': 'text/css'});
        resp.end(resource);
      }
      if (extension == 'jpeg') {
        resp.writeHead(200, {'Content-Type': 'img/jpeg'});
        resp.end(resource);
      }
      if (extension == 'png') {
        resp.writeHead(200, {'Content-Type': 'img/png'});
        resp.end(resource);
      }
      if (extension == 'jpg') {
        resp.writeHead(200, {'Content-Type': 'img/jpg'});
        resp.end(resource);
      }
    }
  })
}).listen(8080);
