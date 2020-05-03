//Importa la libreria de sequelize
const Sequelize = require('sequelize');
//Importamos la base de datos
const db = require('../config/database');

//Definimos el model
const Viaje = db.define('viaje', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    }
});
//Exportamos el modelo
module.exports = Viaje;