var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime-types');

http.createServer((req, resp) => {
  url = ('.' + req.url);
  console.log(url);
  console.log(mime.lookup(url));

  if (url == './') {
    url = './tienda.html'
  }

  fs.readFile(url, (err, resource) => {
    if (err) {
      resp.writeHead(404);
      resp.end('Content not found')
    }else{
      resp.writeHead(200, {'Content-Type': mime.lookup(url)});
      resp.end(resource);
    }
  })
}).listen(8080);
