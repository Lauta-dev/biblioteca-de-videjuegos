// Importar archivos
import { paginaPrincipal } from "./routers/pagina_principal.js";
import { __dirname } from "./__dirname.js";

// Importar y configurar dotenv
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { pageNotFound } from "./routers/page_not_found.js";
const app = express();

// Configuracion de express;
app.set(express.json());
app.set(express.urlencoded({ extended: false }));

// Motor de plantillas
app.set("views", __dirname("views"));
app.set("view engine", "ejs");

// Archivos estaticos
app.use(express.static(__dirname("public")));

// paginas
app.use(paginaPrincipal);
app.use(pageNotFound)

app.listen(process.env.PORT, () =>
  console.log(`server en http://localhost:${process.env.PORT}`)
);
