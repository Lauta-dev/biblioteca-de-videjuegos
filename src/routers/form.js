import express from "express";
import { renderForm, saveInfoInDB } from "../controladores/page_form.js";
export const form = express.Router();



form.get("/form", renderForm)

form.post("/form", saveInfoInDB)



