const http = require('http');
const { infoCursos } = require('./cursos');

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res);
    case 'POST':
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
  }

});

function manejarSolicitudGET(req, res) {
  const path = req.url;
  if(path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    //res.statusCode = 200; //No es necesario porque "statusCode = 200" y ese valor es por defecto
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
  } else if (path === '/cursos') {
    //res.statusCode = 200; //No es necesario porque "statusCode = 200" y ese valor es por defecto
    return res.end(JSON.stringify(infoCursos));
  } else if (path === '/cursos/programacion') {
    //res.statusCode = 200; //No es necesario porque "statusCode = 200" y ese valor es por defecto
    return res.end(JSON.stringify(infoCursos.programacion));
  } else {
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe...');
  }  
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  if(path === '/cursos/programacion') {
    let cuerpo = '';

    req.on('data', contenido => {
      cuerpo += contenido.toString();
    });

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // Convierte a un objeto de Javascript
      cuerpo = JSON.parse(cuerpo);
      console.log(typeof cuerpo);
      console.log(cuerpo.titulo)
      res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    });

    //res.statusCode = 200; //No es necesario porque "statusCode = 200" y ese valor es por defecto
    //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
  }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en: http://localhost:${PUERTO}`)
})