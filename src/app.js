import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import { router } from "./routers/pagina_no_encontrada.js";
import { paginaPrincipal } from "./routers/pagina_principal.js";
import { __dirname } from "./__dirname.js";

const app = express();

// Configuracion de express;
app.set(express.json());
app.set(express.urlencoded({ extended: false }));

// Motor de plantillas
app.set('views', __dirname('views'))
app.set('view engine', 'ejs')

// Archivos estaticos
app.use(express.static(__dirname('public')));

// paginas
app.use(paginaPrincipal);
app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`server en http://localhost:${process.env.PORT}`)
);
