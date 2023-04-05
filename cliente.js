const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// CONFIGURANDO o bodyParser para fazer as requisições
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROTA DE RESGATE DO CUPOM PROMOCIONAL
app.post('/api/promo', (req, res) => {
  const { promoCode } = req.body;

  // Verifica se o código promocional é válido
  if (promoCode === 'ABC123') {
    res.status(200).json({ message: 'Código promocional resgatado com sucesso!' });
  } else {
    res.status(400).json({ message: 'Código promocional inválido!' });
  }
});

// ROTA DE CADASTRO DO CLIENTE
app.post('/api/customer', (req, res) => {
  const { firstName, lastName, email, address, address2 } = req.body;

  // Verificar se os campos obrigatórios foram preenchidos
  if (!firstName || !lastName || !address) {
    res.status(400).json({ message: 'Por favor, preencha todos os campos obrigatórios!' });
  } else {
    const customer = {
      id: customers.length + 1,
      firstName,
      lastName,
      email,
      address,
      address2,
    };
    customers.push(customer);
    res.status(201).json({ message: 'Cliente cadastrado com sucesso!', customer });
  }
});

// ROTA DE LISTAGEM DE CLIENTES CADASTRADOS
app.get('/api/customers', (req, res) => {
 res.status(200).json(customers);
});

// ROTA DE ATUALIZAÇÃO DE INFORMAÇÕES DE UM CLIENTE
app.put('/api/customer/:id', (req, res) => {
  const id = req.params.id;
  const index = customers.findIndex(customer => customer.id === id);

  if (index === -1) {
    res.status(404).send(`Não foi possível encontrar o cliente com o ID ${id}`);
  } else {
    customers[index] = { ...customers[index], ...req.body };
    res.send(`Cliente com o ID ${id} atualizado com sucesso`);
  }
});

//ROTA PRA EXCLUSÃO DE CLIENTE
app.delete('/api/customer/:id', (req, res) => {
    const id = req.params.id;
  
  // Encontrar o índice do cliente a ser removido
  const index = customer.findIndex(customer => customer.id === id);
  
  if (index !== -1) {
    // Remover o cliente da lista de clientes
    res.status(404).send(`Não foi possível encontrar o cliente com o ID ${id}`);
  } else {
    customer.splice(index, 1);
    
    // Retornar uma mensagem de sucesso
    res.status(200).json({ message: 'Cliente removido com sucesso.' });
  } else {
    // Caso o cliente não seja encontrado, retornar um erro 404
    res.status(404).json({ message: 'Cliente não encontrado.' });
  }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
