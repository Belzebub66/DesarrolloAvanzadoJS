const miJsonString = `{
  "nombre": "Curso de JavaScript",
  "instructor": "César Guerra",
  "duracionHoras": 40,
  "temas": [
    "Variables y Tipos de Datos",
    "Funciones",
    "Objetos",
    "Arrays",
    "Callbacks",
    "JSON"
  ],
  "esOnline": true,
  "metadata": {
    "version": "1.0.0",
    "fechaLanzamiento": "2024-06-03"
  },
  "precio": null
}`
console.log("JSON String:", typeof miJsonString);
console.log("JSON String:", miJsonString);

//convertir el string a un objeto JSON
const miJsonObject = JSON.parse(miJsonString);
console.log("JSON Object:", typeof miJsonObject);
console.log("JSON Object:", miJsonObject);