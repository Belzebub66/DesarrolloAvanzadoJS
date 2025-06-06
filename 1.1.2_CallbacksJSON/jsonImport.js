// Make sure to use .mjs extension or set "type": "module" in package.json
import cursos from './cursos.json' assert { type: 'json' };

console.log("JSON Object:", typeof cursos);