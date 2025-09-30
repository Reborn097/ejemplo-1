const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: "postgres",       // 👈 cámbialo
  host: "localhost",
  database: "ejemplo_db",   // 👈 cámbialo
  password: "12345",  // 👈 cámbialo
  port: 5432,
});

// Ruta para probar la conexión
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Conexión exitosa. Hora en DB: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error conectando a la base de datos");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
