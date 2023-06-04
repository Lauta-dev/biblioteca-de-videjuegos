import express from "express";
import { sql } from "../db.js";
import * as dotenv from "dotenv";
export const form = express.Router();

dotenv.config();

const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;

form.get("/form", (_req, res) => {
  res.render("form")
})

form.post("/form", (req, res) => {
  const { juego, img, created_by } = req.body;
  const ordenSQL = `insert into ${DB_DATABASE_NAME} (juego, created_by, img) values (${sql.escape(juego)}, ${created_by}, ${sql.escape(img)})`

  sql.query(ordenSQL , (err, _out) => {
    if (err) console.log(err)
    console.log("guardado")
  })

  res.redirect("/")
})



