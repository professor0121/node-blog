var http=require('http');
const port=process.env.PORT||5000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(port);
console.log('Server running at http://localhost:8080/');