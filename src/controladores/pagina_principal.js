import { sql } from "../db.js";

import * as dotenv from "dotenv";
dotenv.config();

export const createConnectionDB = (_req, res) => {
  const sqlTable = "select * from juegos order by id asc";
  return sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(sqlTable, (err, results) => {
      if (err) console.log(`Papu :( ${err}`);
      res.render("pagina-principal", { results });
      connection.release();
    });
  });
};

export const deleteElementDB = (req, res) => {
  const { id } = req.params;
  const sqlTable = `delete from ${process.env.DB_DATABASE_NAME} where id = ${id}`;

  return sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(sqlTable, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.redirect("/");
    });
  });
};
