//Importa la libreria de sequelize
const Sequelize = require('sequelize');
//Importamos la base de datos
const db = require('../config/database');

//Definimos el model
const Testimonial = db.define('testimoniales', {
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    },
});

//Exportamos el modelo
module.exports = Testimonial;