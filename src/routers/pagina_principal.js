import express from "express";
import {createConnectionDB, deleteElementDB } from "../controladores/pagina_principal.js";
export const paginaPrincipal = express.Router();

paginaPrincipal.get("/", createConnectionDB);

paginaPrincipal.delete("/d/:id", deleteElementDB);
