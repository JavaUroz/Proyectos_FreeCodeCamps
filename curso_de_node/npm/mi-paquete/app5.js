const http = require('http');

const servidor = http.createServer((req, res) => {
  console.log('===> req (solicitud)');
  console.log(req);
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log('===> res (respuesta)');
  res.setHeader('content-type', 'application/json');
  console.log(res.getHeaders());
  console.log(res.statusCode); // 200 OK
  res.statusCode = 404;
  console.log(res.statusCode); // 404 Not Found
  res.end('Hola, mundo');
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log(`El servidor está escuchando en http://localhost:${puerto}...`);
});
