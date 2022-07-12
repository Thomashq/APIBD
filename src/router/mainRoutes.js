const express = require('express')
const getClientes = require('../controllers/clientesController.js');
const getEmprestimos = require('../controllers/emprestimosController.js');
const getLogs = require('../controllers/logsController.js');
const routes = express.Router();

routes.get('/getLogs', async(req, res, next) => {
    let logs = await getLogs();
    res.json(logs);
});
routes.get('/getLoan', async(req, res, next) => {
    let resultado = await getEmprestimos();
    res.json(resultado);
});

routes.get('/getClientes', async (req, res, next) => {
    let cliente = await getClientes();
    res.json(cliente);
});


module.exports = routes;