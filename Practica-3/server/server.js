var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
  url = ('.' + req.url);
  let cookies = req.headers.cookie;
  console.log(cookies);

  if (url == './') {
    url = './templates/tienda.html'
  }
  console.log(url);
  console.log(cookies);
  urlArray = url.split('.');
  extension = urlArray[urlArray.length-1];

  if (extension == 'html' && url != "./login") {
    console.log('que pacha');
    if (!cookies) {
      url = "./templates/register.html";
    }else if (cookies && !cookies.includes('user')) {
      url = "./templates/register.html";
    }
  }

  if (url == './login'){
    console.log('logeandio');
    res.setHeader('Set-Cookie', 'user=piñachu');
    url = './templates/tienda.html';
    extension = 'html';
  }

  fs.readFile(url, (err, resource) => {
    if (err) {
      res.writeHead(404);
      res.end('Content not found')
    }else{
      if (extension == 'html') {
        console.log('me bloqueo');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(resource);
      }
      if (extension == 'css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(resource);
      }
      if (extension == 'jpeg') {
        res.writeHead(200, {'Content-Type': 'img/jpeg'});
        res.end(resource);
      }
      if (extension == 'png') {
        res.writeHead(200, {'Content-Type': 'img/png'});
        res.end(resource);
      }
      if (extension == 'jpg') {
        res.writeHead(200, {'Content-Type': 'img/jpg'});
        res.end(resource);
      }
      if (extension == 'js') {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.end(resource);
      }

    }
  })
}).listen(8000);
