import axios from "axios";

export const getData = async () => {
  try {
    const res = await axios.get("/api/data"); // ruta de tu backend
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
