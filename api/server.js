const express = require('express');
const cors = require('cors'); // Necessário para que o PWA possa chamar a API
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Endpoint 1: Hello World simples
app.get('/', (req, res) => {
  res.status(200).send('API está funcionando! Acesse /api/processar');
});

// Endpoint 2: Endpoint REST/JSON para o PWA (simula o processamento)
app.post('/api/processar', (req, res) => {
  const data = req.body.message;
  if (!data) {
    return res.status(400).json({ error: 'Campo "message" é obrigatório.' });
  }

  // Simula um processamento (transforma em maiúsculas e adiciona timestamp)
  const processedData = {
    original: data,
    processed: data.toUpperCase(),
    timestamp: new Date().toISOString()
  };

  console.log(`Dados processados: ${processedData.processed}`);
  res.status(200).json(processedData);
});

app.listen(PORT, () => {
  console.log(`Backend API rodando na porta ${PORT}`);
});