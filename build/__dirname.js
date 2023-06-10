"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dName = void 0;
const path_1 = require("path");
const f = __filename;
const d = (0, path_1.dirname)(f);
const dName = (ruta) => (0, path_1.join)(d, ruta);
exports.dName = dName;
