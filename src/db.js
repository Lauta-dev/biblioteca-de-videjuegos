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
  // Limite de conecciones
  connectionLimit: process.env.DB_CONNECTION_LIMIT
});

/* crear coneccion con : createConnection
export const sql = mysql.createConnection({
  host: "localhost",
  database: "juegos",
  user: "lautaro",
  password: "pass",
});
*/
/*
sql.connect((err) => {
  const sqlTable = "select juego, id from juegos order by id asc";

  if (err) console.log(err);
  else {
    sql.query(sqlTable, (e, r, f) => {
      if (e) console.log(e);
      r.forEach(({ id, juego }) => console.log(`${id} - ${juego}`));
      sql.end((e) => console.log(e));
    });
  }
});
*/
