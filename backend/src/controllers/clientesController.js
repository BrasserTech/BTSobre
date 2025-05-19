const clienteService = require('../services/clientesService');

function getClientes(req, res) {
  const lista = clienteService.listarClientes();
  res.json(lista);
}

function postCliente(req, res) {
  const novoCliente = req.body;
  const clienteCriado = clienteService.adicionarCliente(novoCliente);
  res.status(201).json(clienteCriado);
}

module.exports = {
  getClientes,
  postCliente,
};
