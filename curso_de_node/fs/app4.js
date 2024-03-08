const fs = require('fs')

console.log('Antes de leer el archivo...')

// Ejecución síncrona

const archivo = fs.readFileSync('index.html', 'utf-8');

console.log(archivo)

console.log('Despues de leer el archivo...')

fs.renameSync('index.html', 'main.html', (err)=>{  // Renombrar un archivo
  if (err) {
    throw err;
  } else {
    console.log('Nombre cambiado exitosamente')
  }
});

console.log('Despues de cambiar el nombre del archivo...')

fs.appendFileSync('main.html', '<p>Hola</p>', (err)=>{   // Agregar contenido al final de un archivo
  if(err){
    throw err
  } else {
    console.log('Archivo actualizado correctamente.')
  }
});

console.log('Despues de agregar contenido...')

fs.writeFileSync('main.html', 'Contenido Nuevo', (err) => {  // Reemplazar contenido del archivo
  if (err){
    throw err
  } else {
    console.log('Contenido reemplazado exitosamente.')
  }
});

console.log('Despues de reemplazar el contenido del archivo...')

fs.unlinkSync('main.html', (err) => {  // Eliminar archivo
  if (err) {
    throw err
  } else {
    console.log('Archivo eliminado')
  }
})

console.log('Despues de eliminar un archivo...')