import React, { useEffect, useState } from "react";
import { getData, addUsuario } from "./api";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    getData().then((res) => setUsuarios(res));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevo = await addUsuario(nombre, correo);
    if (nuevo) {
      setUsuarios([...usuarios, nuevo]); // actualiza lista
      setNombre("");
      setCorreo("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend con React</h1>

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

      <h2>Usuarios registrados:</h2>
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

export default App;
