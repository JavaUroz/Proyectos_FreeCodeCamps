const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos');

// Routers

// app.use('/api/cursos/programacion', routerProgramacion)

const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

// Routing

app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos', (req, res) => {  
  res.send(JSON.stringify(infoCursos));
});

// Programacion



// Matematicas


const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en: http://localhost:${PUERTO}...`)
});