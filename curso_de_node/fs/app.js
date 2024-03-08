const fs = require('fs')

fs.readFile('inde.html', 'utf-8', (err, contenido) => {
  if (err) {
    // console.log(err);  // No se detiene la ejecución de la función
    throw err;  // se detiene la ejecución de la función
  } else {
    console.log(contenido);  
  }
  console.log('Mensaje...')
});