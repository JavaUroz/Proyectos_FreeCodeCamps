const express = require('express')
const { matematicas } = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => {
  res.json(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(curso => curso.tema === tema);

  if(resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos con el tema ${lenguaje}`)
  }

  if(req.query.ordenar === 'vistas') {
    return res.json(resultados.sort((a, b) => a.vistas - b.vistas));
  }

  res.json(resultados);
});

routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;

  const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel);

  if(resultados.length === 0) {
    return res.status(204).send(`No se encontraron cursos con el tema ${tema} de nivel ${nivel}`)
    // return res.status(404).end();
  }

  if(req.query.ordenar === 'vistas') {
    return res.json(resultados.sort((a, b) => a.vistas - b.vistas));
  }
  
  res.send(resultados);
});

routerMatematicas.post('/', (req, res) => {
  let cursoNuevo = req.body;
  matematicas.push(cursoNuevo);
  res.json(matematicas)
});

routerMatematicas.put('/:id', (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex(curso => curso.id == id);

  if (indice >= 0){
    matematicas[indice] = cursoActualizado;
  } else {
    res.status(204).send(`No se encontraron cursos con el id: ${id}`);
  }
  res.json(matematicas);
});

routerMatematicas.patch('/:id', (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoModificar = matematicas[indice];
    Object.assign(cursoModificar, infoActualizada);
  } else {
    res.status(204).send(`No se puede actualizar el contenido del curso con id: ${id}, porque no existe!`)
  }
  res.json(matematicas);
});

routerMatematicas.delete('/:id', (req, res) => {
  const id = req.params.id;
  const indice = matematicas.findIndex(curso => curso.id == id);

  if(indice >= 0) {
    matematicas.splice(indice, 1);
  } else {
    res.status(204).end();
  }
  res.json(matematicas);
});

module.exports = routerMatematicas;