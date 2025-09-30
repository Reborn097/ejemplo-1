const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión con PostgreSQL
const pool = new Pool({
  user: "postgres",     
  host: "localhost",
  database: "ejemplo_db", 
  password: "12345",     
  port: 5432,
});

// Ruta para registrar un usuario
app.post("/api/usuarios", async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, correo) VALUES ($1, $2) RETURNING *",
      [nombre, correo]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Ruta para listar usuarios
app.get("/api/usuarios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
