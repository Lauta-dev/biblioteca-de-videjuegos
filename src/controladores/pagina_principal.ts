import { sql } from "../db.js";

import { Response, Request } from "express";

import * as dotenv from "dotenv";
dotenv.config();

const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;

export const createConnectionDB = (_req: Request, res: Response) => {
  const sqlSelectTable = `select * from ${DB_DATABASE_NAME}`;
  return sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(sqlSelectTable, (err, results) => {
      if (err) console.log(`Papu :( ${err}`);
      res.render("pagina-principal", { results });
      connection.release();
    });
  });
};

export const deleteElementDB = (req: Request, res: Response) => {
  const { id } = req.params;

  const sqlDeleteTable = `delete from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${sql.escape(
    id
  )}`;

  sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(sqlDeleteTable, (err, _result) => {
      if (err) console.log(err);
      res.redirect("/");
      connection.release();
    });
  });
};

export const viewFormUpdate = (req: Request, res: Response) => {
  const { id } = req.params;

  const a = `select game from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${sql.escape(
    id
  )}`;

  sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(a, (err, result) => {
      if (err) console.log(err);
      result.map(({ game }: { game: string }) =>
        res.render("form2", { id, game })
      );
    });
  });
};

export const updateElementDB = (req: Request, res: Response) => {
  const { juego, img } = req.body;
  const { id } = req.params;

  const sqlUpdateTable = `update ${DB_DATABASE_NAME} set game = ${sql.escape(
    juego
  )}, image = ${sql.escape(img)} where uuid_FRONT_END = ${sql.escape(id)}`;

  sql.getConnection((err, connection) => {
    if (err) console.log(err);

    connection.query(sqlUpdateTable, (err, _result) => {
      if (err) console.log(err);
      res.redirect("/");
      connection.release();
    });
  });
};
