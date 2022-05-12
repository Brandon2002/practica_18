let express = require('express'); //Inyección de la dependencia express
let app = express(); //Hace funcionar al servidor
let personsRoute = require('./routes/person'); //Router que viene de persons

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000; //Por donde el puerto escuchará.

app.listen(PORT, () =>{ //Poner a escuchar al puerto
    console.log('Escuchando en el puerto 3000'); //Lo que se imprime en consola cuando se pone a escuchar el puerto.
});