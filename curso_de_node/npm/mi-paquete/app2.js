const statusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(statusPedido()) {
      resolve('¡Pedido exitoso! Su pizza está en camino.')
    } else {
      reject('Ocurrió un error. Por favor intente nuevamente')
    }
  }, 3000)
});


//  Manejo con funciones externas----------------------------------------------
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion)
}

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError)
}

miPedidoPizza.then(manejarPedido, rechazarPedido);



// Manejo con funciones incluidas en la instanciación de la promesa------------
miPedidoPizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  });



//  Manejo con la funcion .catch()
miPedidoPizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });




// Otra opcion combinando .catch() y funciones externas
// const manejarPedido = (mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion)
// };

// const rechazarPedido = (mensajeDeError) => {
//  console.log(mensajeDeError)
// };

miPedidoPizza
  .then(manejarPedido)
  .catch(rechazarPedido);



