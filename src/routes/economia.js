const express = require('express');
const router = express.Router();

let economiaController = require('../controllers/economiaController');

router.get('/teoriadelasorganizaciones', economiaController.teoriadelasorganizaciones);
router.get('/gestionorganizacional', economiaController.gestionorganizacional);

module.exports = router;