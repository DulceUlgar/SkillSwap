// src/components/RegisterForm.js

import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Imprime el mensaje de confirmación del backend
        // Puedes redirigir al usuario a otra página o mostrar una notificación de éxito.
      } else {
        console.error("Error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  // Resto del código del componente
};
