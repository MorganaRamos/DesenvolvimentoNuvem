const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rota para o cadastro de pedidos
app.post('/api/pedidos', (req, res) => {
  const nomeProduto = req.body.nomeProduto;
  const cliente = req.body.cliente;
  const valor = req.body.valor;

  // Realizar o cadastro do pedido no banco de dados

  // Retorna uma resposta HTTP com status 200 e um objeto JSON
  res.status(200).json({
    mensagem: 'Pedido cadastrado com sucesso',
    pedido: {
      nomeProduto: nomeProduto,
      cliente: cliente,
      valor: valor
    }
  });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
// Array de objetos para armazenar os produtos
let products = [
  {
    id: 1,
    name: "Produto 1",
    description: "Descrição do produto 1",
    price: 10.0,
  },
  {
    id: 2,
    name: "Produto 2",
    description: "Descrição do produto 2",
    price: 20.0,
  },
];

// Operação GET para retornar todos os produtos
function getProducts(req, res) {
  res.status(200).json(products);
}

// Operação GET para retornar um produto específico pelo ID
function getProduct(req, res) {
  const productId = req.params.id;
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) {
    res.status(404).send("Produto não encontrado");
  } else {
    res.status(200).json(product);
  }
}

// Operação PUT para atualizar um produto existente
function updateProduct(req, res) {
  const productId = req.params.id;
  const productIndex = products.findIndex((p) => p.id === parseInt(productId));
  if (productIndex === -1) {
    res.status(404).send("Produto não encontrado");
  } else {
    const updatedProduct = {
      id: parseInt(productId),
      name: req.body.name,
      description: req.body.description,
      price: parseFloat(req.body.price),
    };
    products[productIndex] = updatedProduct;
    res.status(200).send("Produto atualizado com sucesso");
  }
}

// Operação DELETE para remover um produto existente
function deleteProduct(req, res) {
  const productId = req.params.id;
  const productIndex = products.findIndex((p) => p.id === parseInt(productId));
  if (productIndex === -1) {
    res.status(404).send("Produto não encontrado");
  } else {
    products.splice(productIndex, 1);
    res.status(200).send("Produto removido com sucesso");
  }
}
