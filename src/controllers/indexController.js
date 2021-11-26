let indexController = {

    index: function(req, res) {
        res.render('index');
    },

    sobrenosotros: function(req, res) {
        res.render('sobrenosotros');
    },

};

module.exports = indexController;