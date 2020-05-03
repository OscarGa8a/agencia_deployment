exports.infoNosotros = (req, res) => {
    //Opcion para mostrar las vistas en la pagina y busca por nombre de carpeta en views
    res.render('nosotros', {
        pagina: 'Sobre nosotros'
    });
}