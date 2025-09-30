import React, { useEffect, useState } from "react";
import { getData } from "./api"; // función que hará la llamada al backend

function App() {
  const [data, setData] = useState(null);

  // Cuando el componente cargue, hacemos la petición al servidor
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend con React</h1>
      <h2>Datos desde el servidor Node.js:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

