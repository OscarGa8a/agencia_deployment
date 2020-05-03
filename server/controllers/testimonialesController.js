//Importamos el modelo de testimoniales
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req, res) => {
    //Busca toda la informacion en la tabla de testimoniales
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    //la informacion del formulario se encuentra en req.body
    //Se valida que todos los campos del formulario esten llenos
    let {nombre, correo, mensaje} = req.body;
    //Para almacenar los errores
    let errores = [];
    //Si no se ingreso el nombre
    if(!nombre) errores.push({'mensaje': 'Agrega tu nombre'});
    //Si no se ingreso el correo
    if(!correo) errores.push({'mensaje': 'Agrega tu correo'});
    //Si no se ingreso el mensaje
    if(!mensaje) errores.push({'mensaje': 'Agrega tu mensaje'});

    //Revisar si hay erroes
    if(errores.length){
        //Muestra la vista con errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
        //Lo almacenamos en la BD
        const testimonial = await Testimonial.create({
            nombre,
            correo,
            mensaje
        });
        res.redirect('/testimoniales')
    }
}