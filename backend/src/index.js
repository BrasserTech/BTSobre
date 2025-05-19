const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const clientesRoutes = require('./routes/clientesRoutes');

app.use(cors());
app.use(express.json());

// Rotas
app.use('/clientes', clientesRoutes);

app.get('/', (req, res) => {
  res.send('Servidor ERP rodando com sucesso!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
