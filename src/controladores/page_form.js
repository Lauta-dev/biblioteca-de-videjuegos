import { sql } from "../db.js";
import * as dotenv from "dotenv";

dotenv.config();

const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;
export const renderForm = (_req, res) => res.render("form");

export const saveInfoInDB = (req, res) => {
  const { juego, img, created_by } = req.body;
  const ordenSQL = `insert into ${DB_DATABASE_NAME} (juego, created_by, img) 
    values 
      (${sql.escape(juego)}, ${created_by}, ${sql.escape(img)})
     `
  sql.query(ordenSQL , (err, out) => err ? console.log(err) : console.log("guardado", out))
  res.redirect("/")
}

  
