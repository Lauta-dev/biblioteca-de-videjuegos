// Importar mysql
import mysql, { Pool, PoolConfig } from "mysql";

// Importar dotenv
import * as dotenv from "dotenv";

// Usar dotenv
dotenv.config();

type DB_typs = PoolConfig & {
  host: string;
  database: string;
  user: string;
  password: string | number;
  connectionLimit: number;
  multipleStatements: boolean;
};

const dbConfig: DB_typs = {
  host: process.env.DB_HOST || "",
  database: process.env.DB_DATABASE_NAME || "",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASS || "",
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || "0", 5), // Limite de conexiones
  multipleStatements: true, // Ejecuta multiples llamadas SQL
};

/* crear coneccion con : createPool */
export const sql: Pool = mysql.createPool(dbConfig);
