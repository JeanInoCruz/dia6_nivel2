import http from "node:http";
import { pool } from "./db.js";
import { store, getProducts } from "./lib.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  if (method === "GET") {
    switch (url) {
      case "/":
        //codigo que amneja la ruta
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Bienvenido a mi API :D</h1>');
        break;

      case "/productos":
        getProducts(req, res);
        break;

      default:
        // codigo que manjea la ruta no encontrado
        break;
    }
  }

  if (method === "POST") {
    switch (url) {
      case "/productos":
        store(req, res);
        break;
      default:
        // Codigo que maneja la ruta no encontrada o no sportada en el servidor
        break;
    }
  }
});

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
