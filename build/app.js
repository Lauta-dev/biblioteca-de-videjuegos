"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const pagina_principal_1 = require("./routers/pagina_principal");
const __dirname_1 = require("./__dirname");
const page_not_found_1 = require("./routers/page_not_found");
const form_1 = require("./routers/form");
const method_override_1 = __importDefault(require("method-override"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, method_override_1.default)("_method"));
app.set("views", (0, __dirname_1.dName)("views"));
app.set("view engine", "ejs");
app.use(express_1.default.static((0, __dirname_1.dName)("public")));
app.use("/editar/", express_1.default.static((0, __dirname_1.dName)("public")));
app.use(pagina_principal_1.paginaPrincipal);
app.use(form_1.form);
app.use(page_not_found_1.pageNotFound);
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080, () => { var _a; return console.log(`server en http://localhost:${(_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8080}`); });
