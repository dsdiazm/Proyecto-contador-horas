
//
const express = require("express");
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
var cors = require('cors')
//inicializacion del puerto
app.set('puerto', process.env.PORT || 3100);

if (process.env.NODE_ENV === 'development') {
    // CORS settings
}
//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//rutas
app.use(cors())
app.use('/registro', require('./reg_trabajo/registro'));
app.use('/lectura', require('./read_trabajo/lectura'));


//inicio del servidor
app.listen(app.get("puerto"), () => {
    
 console.log("El servidor está inicializado en el puerto "+app.get("puerto"));
});