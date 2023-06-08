import { sql } from "../db.js";
import fs from "fs";

import * as dotenv from "dotenv";
dotenv.config();

const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;

export const createConnectionDB = (_req, res) => {
  const sqlTable = `select * from ${DB_DATABASE_NAME}`;
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

  const eliminarElemento = `delete from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${sql.escape(
    id
  )}`;

  sql.getConnection((err, connection) => {
    if (err) console.log(err);
    connection.query(eliminarElemento, (err, _result) => {
      if (err) console.log(err);
      res.redirect("/");
      connection.release();
    });
  });
};

export const viewFormUpdate = (req, res) => {
  const { id } = req.params;

  const a = `select game from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${sql.escape(
    id
  )}`;

  sql.getConnection((err, connection) => {
    if (err) throw new Error(err);
    connection.query(a, (err, result) => {
      if (err) throw new Error(err);
      result.map(({ game }) => res.render("form2", { id, game }));
    });
  });
};

export const updateElementDB = (req, res) => {
  const { juego, img } = req.body;
  const { id } = req.params;

  const sqlTable = `update ${DB_DATABASE_NAME} set game = ${sql.escape(
    juego
  )}, image = ${sql.escape(img)} where uuid_FRONT_END = ${sql.escape(id)}`;

  sql.getConnection((err, connection) => {
    if (err) console.log(err);

    connection.query(sqlTable, (err, result) => {
      if (err) console.log(err);
      res.redirect("/");
      connection.release();
    });
  });
};
