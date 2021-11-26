const express = require('express');
const router = express.Router();

let indexController = require('../controllers/indexController');
router.get('/', indexController.index);

router.get('/sobrenosotros', indexController.sobrenosotros);

module.exports = router;