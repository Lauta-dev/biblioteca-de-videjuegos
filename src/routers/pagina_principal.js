import express from "express";
import {createConnectionDB, deleteElementDB, viewFormUpdate, updateElementDB } from "../controladores/pagina_principal.js";
export const paginaPrincipal = express.Router();

paginaPrincipal.get("/", createConnectionDB);
paginaPrincipal.delete("/eliminar/:id", deleteElementDB);

paginaPrincipal.get("/editar/:id", viewFormUpdate);
paginaPrincipal.post("/editar/:id", updateElementDB);
