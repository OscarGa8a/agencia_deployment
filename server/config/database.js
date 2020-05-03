//Importa la libreria de sequelize
const Sequelize = require('sequelize');
//Importamos y configuramos las variables de entorno
require('dotenv').config({ path: 'variables.env'});

//Exporta la base de datos para que pueda ser accedida desde otro script
module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
    //El host en el que se encuentra la base de datos, si esta en un servidor
    //se pone el link del servidor, en este caso esta en el localhost
    host: process.env.BD_HOST,
    //El puerto de la base de datos
    port: process.env.BD_PORT,
    //Hace referencia al tipo de base de datos
    dialect: 'mysql',
    //Otras configuraciones
    define: {
        timestamps: false
    },
    //Otras configuraciones
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    //Otras configuraciones
    operatorAliases: false
});