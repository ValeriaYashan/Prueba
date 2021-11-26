const express = require('express');
const router = express.Router();

let cienciasnaturalesController = require('../controllers/cienciasnaturalesController');

router.get('/fisica', cienciasnaturalesController.fisica);
router.get('/quimica', cienciasnaturalesController.quimica);

module.exports = router;