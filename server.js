var express = require('express');

var app = express();

// el primer parametro es la ruta, 
// el segundo es una funcion que puede tener un nombre o no,que
// recibe dos parametros. equerimiento, respond
app.get ('/', function(req, res) { 
  res.send('Hola Mundo!')                  
})

// ahora lanzar el servidor web
// puerto que escuche y lo que hace listen en segundo parametrp
// es omar una funcion que toma por primer parametro un error
// en caso de que lo halla
app.listen(3000, function(err){
  if (err) return console.log ('Hubo un error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3000');
})