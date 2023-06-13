"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginaPrincipal = void 0;
const express_1 = __importDefault(require("express"));
const pagina_principal_1 = require("../controladores/pagina_principal");
exports.paginaPrincipal = express_1.default.Router();
exports.paginaPrincipal.get("/", pagina_principal_1.createConnectionDB);
exports.paginaPrincipal.delete("/eliminar/:uuid_front_end", pagina_principal_1.deleteElementDB);
