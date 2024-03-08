let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "mumlikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
};

// Objeto -> Cadena de caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso); // convierte objeto js a json
console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON) // convierte cadena de json a objeto js
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
console.log(infoCursoObjeto.temas)