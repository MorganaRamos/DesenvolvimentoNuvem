const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'payment.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});


app.post('/api/payment', (req, res) => {
  const { paymentMethod, ccName, ccNumber, ccExpiration, ccCvv } = req.body;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!paymentMethod || !ccName || !ccNumber || !ccExpiration || !ccCvv) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Verifica se os dados do cartão de crédito são válidos
  // Implemente a lógica de validação de acordo com as regras do negócio

  // Realiza a operação de cadastro de pagamento
  // Implemente a lógica de cadastro de acordo com as regras do negócio

  return res.status(201).json({ message: 'Pagamento cadastrado com sucesso' });
});

app.put('/api/payment/:id', (req, res) => {
  const { id } = req.params;
  const { paymentMethod, ccName, ccNumber, ccExpiration, ccCvv } = req.body;

  // Verifica se todos os campos obrigatórios foram preenchidos
  if (!paymentMethod || !ccName || !ccNumber || !ccExpiration || !ccCvv) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  // Verifica se os dados do cartão de crédito são válidos
  // Implemente a lógica de validação de acordo com as regras do negócio

  // Realiza a operação de atualização de pagamento
  // Implemente a lógica de atualização de acordo com as regras do negócio

  return res.status(200).json({ message: `Pagamento ${id} atualizado com sucesso` });
});

app.delete('/api/payment/:id', (req, res) => {
  const { id } = req.params;

  // Realiza a operação de exclusão de pagamento
  // Implemente a lógica de exclusão de acordo com as regras do negócio

  return res.status(200).json({ message: `Pagamento ${id}