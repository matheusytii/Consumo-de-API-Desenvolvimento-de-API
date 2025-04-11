const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());

// Dados estáticos (exemplo de livros)
const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { id: 3, titulo: "1984", autor: "George Orwell" },
];


app.get('/api/livros', (req, res) => {
  res.json(livros);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
