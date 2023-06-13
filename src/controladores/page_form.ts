// import { sql } from "../db.js";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../db";
dotenv.config();

export const renderForm = (_req: Request, res: Response) => res.render("form");
export const saveInfoInDB = async (req: Request, res: Response) => {
  const { game, image, created_by } = req.body;
  const body = { game, image, created_by, uuid_front_end: uuidv4() };
  const { data, error } = await supabase.from("juegos").insert([body]);
  res.redirect("/");
  return data;
};
