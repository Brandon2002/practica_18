let express = require('express');
let router = express.Router();

router.get('/person', (req, res) =>{
    res.send('Has solicitado el listado de personas'); //Información que se enviará cuando sea solicitada
});

module.exports= router; //Exportar el router




