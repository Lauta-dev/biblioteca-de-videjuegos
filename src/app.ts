// Importar archivos
import { paginaPrincipal } from "./routers/pagina_principal";
import { dName } from "./__dirname";
import { pageNotFound } from "./routers/page_not_found";
import { form } from "./routers/form";

import methodOverride from "method-override";

// Importar y configurar dotenv
import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Configuracion de express;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Motor de plantillas
app.set("views", dName("views"));
app.set("view engine", "ejs");

// Archivos estaticos
app.use(express.static(dName("public")));
app.use("/editar/", express.static(dName("public")));

// paginas
app.use(paginaPrincipal);
app.use(form);
app.use(pageNotFound);

app.listen(process.env.PORT ?? 8080, () =>
  console.log(`server en http://localhost:${process.env.PORT ?? 8080}`)
);
