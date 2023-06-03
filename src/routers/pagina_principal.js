import express from "express";
import {createConnectionDB } from "../controladores/pagina_principal.js";
export const paginaPrincipal = express.Router();

paginaPrincipal.get("/", createConnectionDB);
