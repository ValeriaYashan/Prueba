let economiaController = {

    teoriadelasorganizaciones: function(req, res) {
 
         res.render('economia/teoriadelasorganizaciones');/*va por ruta ciencias naturales y muestra la vista fisica*/
     },
 
     gestionorganizacional: function(req, res) {
 
         res.render('economia/gestionorganizacional');/*va por ruta ciencias naturales y muestra la vista quimica*/
     },
 
 };
 
 module.exports = economiaController;