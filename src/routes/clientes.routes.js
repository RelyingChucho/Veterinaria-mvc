const {Router} = require('express');
const router = Router();
const clientesController = require('../controllers/clientes.controller');

router.get('/', clientesController.obtenerClientes);

module.exports = router;