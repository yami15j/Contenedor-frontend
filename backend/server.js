const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "camaccess",
  port: 5432,
});

app.get("/usuarios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

app.listen(3000, () => {
  console.log("Servidor ejecutándose en puerto 3000");
});
