const fs = require('fs')

console.log('Antes de leer el archivo...')

// Ejecución de manera asíncrona

fs.readFile('index.html', 'utf-8', (err, contenido) => { // Leer un archivo
  if (err) {
    // console.log(err);  // No se detiene la ejecución de la función
    throw err;  // se detiene la ejecución de la función
  } else {
    console.log(contenido);  
  }
});

console.log('Despues de leer el archivo...')

fs.rename('index.html', 'main.html', (err)=>{  // Renombrar un archivo
  if (err) {
    throw err;
  } else {
    console.log('Nombre cambiado exitosamente')
  }
});

console.log('Despues de cambiar el nombre del archivo...')

fs.appendFile('main.html', '<p>Hola</p>', (err)=>{   // Agregar contenido al final de un archivo
  if(err){
    throw err
  } else {
    console.log('Archivo actualizado correctamente.')
  }
});

console.log('Despues de agregar contenido...')

fs.writeFile('main.html', 'Contenido Nuevo', (err) => {  // Reemplazar contenido del archivo
  if (err){
    throw err
  } else {
    console.log('Contenido reemplazado exitosamente.')
  }
});

console.log('Despues de reemplazar el contenido del archivo...')

fs.unlink('main.html', (err) => {  // Eliminar archivo
  if (err) {
    throw err
  } else {
    console.log('Archivo eliminado')
  }
})

console.log('Despues de eliminar un archivo...')