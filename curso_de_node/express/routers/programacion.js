const express = require('express');
const { route } = require('./matematicas.js');
const { programacion } = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

// Middleware: va a procesar antes que cualquier método la conversion a objetos json
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req, res) => {
  res.json(programacion);
});

routerProgramacion.get('/:lenguaje', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

  if(resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos con el lenguaje ${lenguaje}`)
  }

  if(req.query.ordenar === 'vistas') {
    return res.json(resultados.sort((a, b) => a.vistas - b.vistas));
  }

  res.send(JSON.stringify(resultados));
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

  if(resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos con el lenguaje ${lenguaje} de nivel ${nivel}`)
    // return res.status(404).end();
  }

  if(req.query.ordenar === 'vistas') {
    return res.json(resultados.sort((a, b) => a.vistas - b.vistas));
  }
  
  res.send(resultados);
});

routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.json(programacion)
});

routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0){
    programacion[indice] = cursoActualizado;
  } else {
    res.status(204).send(`No se encontro curso de programacion con el id: ${indice}.`)
  }
  res.json(programacion);
});

routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoModificar = programacion[indice];
    Object.assign(cursoModificar, infoActualizada);
  } else {
    res.status(204).send(`No se encontro curso de programacion con el id: ${indice}.`)
  }
  res.json(programacion);
});

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    programacion.splice(indice, 1);
  } else {
    res.status(204).send(`No se puede eliminar ningun curso. No se encontro el curso con id: ${indice}.\nPruebe un ID existente!`)
  }
  res.json(programacion);
});

module.exports = routerProgramacion;