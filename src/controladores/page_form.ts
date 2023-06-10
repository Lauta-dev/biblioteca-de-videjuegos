import { sql } from "../db.js";
import * as dotenv from "dotenv";

import { Request, Response } from "express";

import { v4 as uuidv4 } from "uuid";

dotenv.config();

const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;
export const renderForm = (_req: Request, res: Response) => res.render("form");

export const saveInfoInDB = (req: Request, res: Response) => {
  const { juego, img, created_by } = req.body;
  console.log(req.body);
  const ordenSQL = `insert into ${DB_DATABASE_NAME} (game, created_by, image, uuid_FRONT_END) 
    values 
      (${sql.escape(juego)}, ${created_by}, ${sql.escape(img)}, ${sql.escape(
    uuidv4()
  )})
     `;
  sql.query(ordenSQL, (err, _out) =>
    err ? console.log(err) : res.redirect("/")
  );
};
