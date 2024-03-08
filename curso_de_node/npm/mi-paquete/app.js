const EventEmitter = require('events'); // se asigna Clase a la constante que permite crear una instancia de la clase

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => { // Funcion llamada EventHandlers
  console.log(`Total de la compra: $${total}`);
  console.log(`Numero de productos ${numProductos}`);
});

emisorProductos.emit('compra', 500, 5)