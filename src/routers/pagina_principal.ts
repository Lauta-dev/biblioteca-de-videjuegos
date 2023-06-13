import express from "express";
import {
  createConnectionDB,
  deleteElementDB,
} from "../controladores/pagina_principal";
export const paginaPrincipal = express.Router();

paginaPrincipal.get("/", createConnectionDB);
paginaPrincipal.delete("/eliminar/:uuid_front_end", deleteElementDB);

// paginaPrincipal.get("/editar/:id", viewFormUpdate);
// paginaPrincipal.post("/editar/:id", updateElementDB);
