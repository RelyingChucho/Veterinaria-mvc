const express = require('express');
const morgan = require('morgan');
const app = express();

//Configuraciones
app.set('port', process.env.PORT||3400);
app.set('view engine', 'ejs');

//Configuracion de MiddleWares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(require('./routes/clientes.routes'));

module.exports = app;