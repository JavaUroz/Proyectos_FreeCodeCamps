const http = require('http');

const servidor = http.createServer((req, res) => {
  res.end('Cestari!, las tolvas mejores del mundo!')
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en: http://localhost:${PUERTO}`);
});