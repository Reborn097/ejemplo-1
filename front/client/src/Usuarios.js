import React, { useState, useEffect } from "react";

function Usuarios() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  // Cargar lista de usuarios
  useEffect(() => {
    fetch("/api/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo }),
    });
    const nuevo = await res.json();
    setUsuarios([...usuarios, nuevo]); // actualizar lista
    setNombre("");
    setCorreo("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Registrar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>

      <h3>Lista de usuarios</h3>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} - {u.correo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
