//Importamos express
const express = require('express');
//Usamos la funcion Router de express para almacenar las rutas de la pagina
const router = express.Router();

//Importamos el modelo de viajes
const Viaje = require('../models/Viajes');
//Importamos el modelo de testimoniales
const Testimonial = require('../models/Testimoniales');

//Controladores
//Importamos el controlador de la vista de Nosotros
const nosotrosController = require('../controllers/nosotrosController');
//Importamos el controlador de la vista de Home
const homeController = require('../controllers/homeController');
//Importamos el controlador de la vista de Viajes
const viajesController = require('../controllers/viajesController');
//Importamos el controlador de la vista de Testimoniales
const testimonialesController = require('../controllers/testimonialesController');

//Exporta las rutas
module.exports = function(){

    router.get('/', homeController.infoHome);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    //Cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);
    
    return router;
}