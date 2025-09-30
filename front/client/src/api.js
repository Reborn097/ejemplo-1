import axios from "axios";

// Obtener lista de usuarios
export const getData = async () => {
  try {
    const res = await axios.get("/api/usuarios"); // 👈 cambia /api/data por /api/usuarios
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Registrar usuario
export const addUsuario = async (nombre, correo) => {
  try {
    const res = await axios.post("/api/usuarios", { nombre, correo });
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
