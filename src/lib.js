import { pool } from "./db.js";

export const getProducts = async (req, res) => {
  const result = await pool.query("SELECT * FROM productos");

  res.writeHead(200, { "Content-Type": "aplication/json" });
  res.end(JSON.stringify(result[0]));
};
// Codigo que guarda un producto en la base de datos 

export const store = async (req, res) => {
  const sql =
    "INSERT INTO productos(nombre, precio, descripcion, imagen, stock) VALUES (?, ?, ?, ?, ?)";

  const values = [
    "Neumatico",
    1000,
    "Neumatico es un producto de la marca",
    "neumatico.jpg",
    10,
  ];

  const result = await pool.execute(sql, values);

  //traer el id del registro insertado en BD
  const idInserted = result[0].insertId;

  // traer el registro insertado en BD
  const producto = await pool.execute("SELECT FROM productos WHERE id = ?", [
    idInserted,
  ]);

  // devolver una respuesta en formato json con el registro insertado
  res.writeHead(200, { "Content-Type": "aplication/json" });
  res.end(JSON.stringify(producto[0][0]));
};
