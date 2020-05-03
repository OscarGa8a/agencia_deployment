//Importamos el modelo de viajes
const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    //Retorna todos los resultados de la base de datos
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Próximos viajes',
        //viajes: viajes //como propiedad y valor tienen el mismo nombre se puede enviar como sigue
        viajes
    });
}

exports.mostrarViaje = async (req, res) => {
    //Retorna todos los resultados de la base de datos
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    });
}