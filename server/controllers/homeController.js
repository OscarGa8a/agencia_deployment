//Importamos el modelo de viajes
const Viaje = require('../models/Viajes');
//Importamos el modelo de testimoniales
const Testimonial = require('../models/Testimoniales');

exports.infoHome = async (req, res) => {
    const viajes = await Viaje.findAll({limit: 3})
    const testimoniales = await Testimonial.findAll({limit: 3})
    res.render('index', {
        pagina: 'Proximos viajes',
        clase: 'home',
        viajes,
        testimoniales
    });
}