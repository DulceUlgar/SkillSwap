// app.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Ruta para el registro de usuarios
app.post("/api/register", (req, res) => {
  // Aquí recibiríamos los datos del formulario desde el frontend
  const { username, email, password } = req.body;

  // Procesar los datos y crear el usuario en la base de datos
  // Aquí debes implementar la lógica para almacenar los datos en una base de datos.

  // Envía una respuesta al frontend (en este caso, solo un mensaje de confirmación)
  res.json({ message: "Usuario registrado exitosamente" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
