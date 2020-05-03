//Importamos express
const express = require('express');
//Importamos las rutas
const routes = require('./routes');
//Importamos libreria para manejar rutas
const path = require('path');
//Importamos las configuracion
const configs = require('./config');
//Importamos la libreria de bodyParse
const bodyParser = require('body-parser');
/*
//Importamos la base de datos
const db = require('./config/database');
//Se prueba la conexion de la base de datos
db.authenticate()
    .then(() => console.log('DB Conectada'))
    .catch(error => console.log(error));
*/
//Importamos y configuramos las variables de entorno
require('dotenv').config({ path: 'variables.env'});

//Configuramos express
const app = express();

//Habilitamos pug
app.set('view engine', 'pug');
//Añadimos las vista, dando la ruta en donde se encuentran
app.set('views', path.join(__dirname, './views'))

//Cargamos una carpeta estatica llamda public, que es donde se almacenan los css y las imagenes
app.use(express.static('public'));

//Se valida si estamos en desarrollo o en produccion
const config = configs[app.get('env')];
//Creamos la varibale para el sitio web
app.locals.titulo = config.nombreSitio;

//Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    //Crea una nueva fecha
    const fecha = new Date();
    //Guarda el año en una variable local de nodejs y express
    //Crea variables que pueden ser leidas en los templates
    res.locals.fechaActual = fecha.getFullYear();
    //Obtenemos la pagina actual
    res.locals.ruta = req.path;
    return next();
});

//Ejecutamos el bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//Cargamos las rutas y usamos "use" porque las rutas pueden ser get, post, put
app.use('/', routes());

//Puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
//Heroku asigna la variables process.env.PORT
const port = process.env.PORT || 3000;

//Elige el puerto de salida
app.listen(port, host, () =>{
    console.log('El servidor esta funcionando');
});