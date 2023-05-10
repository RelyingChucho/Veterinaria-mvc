const clientesController = {};
const Cliente = require('../models/Cliente.model');

clientesController.obtenerClientes = async(req, res)=>{
    const clientes = await Cliente.find();
    res.json(clientes);
};

module.exports = clientesController;