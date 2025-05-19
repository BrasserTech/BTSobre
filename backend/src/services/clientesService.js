let clientes = [];

function listarClientes() {
  return clientes;
}

function adicionarCliente(cliente) {
  cliente.id = clientes.length + 1;
  clientes.push(cliente);
  return cliente;
}

module.exports = {
  listarClientes,
  adicionarCliente,
};
