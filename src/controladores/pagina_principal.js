import { sql } from "../db.js";

const sqlTable = "select * from juegos order by id asc";
export const createConnectionDB = (_req, res) => {
  return sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(sqlTable, (err, results) => {
      if (err) console.log(`Papu :( ${err}`);
      res.render("pagina-principal", { results });
      connection.release();
    });
  });
};
