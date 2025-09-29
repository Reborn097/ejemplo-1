const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 Servidor Express funcionando!');
});

// Puerto de conexión
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en algun lugar http://localhost:${PORT}`);
});
