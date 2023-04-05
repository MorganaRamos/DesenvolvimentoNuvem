const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuração do bodyParser para lidar com solicitações POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definir rotas para a API
const router = express.Router();
// buscar pedido por id
app.get('/pedidos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id); // assume que o modelo Pedido já foi definido
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar pedido' });
  }
});

// atualizar pedido por id
app.put('/pedidos/:id', async (req, res) => {
  const { id } = req.params;
  const { nomeProduto, cliente, valor } = req.body;
  try {
    const pedido = await Pedido.findByPk(id); // assume que o modelo Pedido já foi definido
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    pedido.nomeProduto = nomeProduto;
    pedido.cliente = cliente;
    pedido.valor = valor;
    await pedido.save();
    res.json({ message: `Pedido ${id} atualizado com sucesso!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar pedido' });
  }
});

// excluir pedido por id
app.delete('/pedidos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findByPk(id); // assume que o modelo Pedido já foi definido
    if (!pedido) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    await pedido.destroy();
    res.json({ message: `Pedido ${id} excluído com sucesso!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir pedido' });
  }
});
// Registra as rotas na aplicação
app.use('/api', router);

// Inicia o servidor
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Servidor rodando na porta ${port}`);
