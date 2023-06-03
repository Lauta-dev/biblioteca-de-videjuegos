// Importar mysql
import mysql from "mysql";

// Importar dotenv
import * as dotenv from "dotenv";

// Usar dotenv
dotenv.config();

/* crear coneccion con : createPool */
export const sql = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectionLimit: process.env.DB_CONNECTION_LIMIT, // Limite de conexiones
});
