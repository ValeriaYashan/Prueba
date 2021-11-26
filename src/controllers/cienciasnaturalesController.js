let cienciasnaturalesController = {

    fisica: function(req, res) {
 
         res.render('cienciasnaturales/fisica');/*va por ruta ciencias naturales y muestra la vista fisica*/
     },
 
     quimica: function(req, res) {
 
         res.render('cienciasnaturales/quimica');/*va por ruta ciencias naturales y muestra la vista quimica*/
     },
 
 };
 
 module.exports = cienciasnaturalesController;