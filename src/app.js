// Importar archivos
import { paginaPrincipal } from "./routers/pagina_principal.js";
import { __dirname } from "./__dirname.js";
import { pageNotFound } from "./routers/page_not_found.js";
import { form } from "./routers/form.js";

// Importar y configurar dotenv
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import methodOverride from 'method-override'
const app = express();

// Configuracion de express;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"))

// Motor de plantillas
app.set("views", __dirname("views"));
app.set("view engine", "ejs");

// Archivos estaticos
app.use(express.static(__dirname("public")));

// paginas
app.use(paginaPrincipal);
app.use(form);
app.use(pageNotFound)

app.listen(process.env.PORT ?? 8080, () =>
  console.log(`server en http://localhost:${process.env.PORT ?? 8080}`)
);
