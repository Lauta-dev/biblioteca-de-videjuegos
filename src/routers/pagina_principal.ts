import express from "express";
import {
  createConnectionDB,
  deleteElementDB,
  viewFormUpdate,
} from "../controladores/pagina_principal";
export const paginaPrincipal = express.Router();

paginaPrincipal.get("/", createConnectionDB);
paginaPrincipal.delete("/eliminar/:uuid_front_end", deleteElementDB);

paginaPrincipal.get("/editar/:uuid_front_end", viewFormUpdate);
//paginaPrincipal.post("/editar/:uuid_front_end", updateElementDB);
