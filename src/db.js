"use strict";
// Importar mysql
// import mysql, { Pool, PoolConfig } from "mysql";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var supabase_js_1 = require("@supabase/supabase-js");
// Configuracion para supabase
var opcionesSupabase = {
    db: {
        schema: "public",
    },
    auth: {
        autoRefreshToken: true,
        persistSession: false,
        detectSessionInUrl: true,
    },
};
var supabaseUrl = process.env.DB_SUPABASE_URL || "";
var supabaseKey = process.env.DB_SUPABASE_KEY || "";
var supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, opcionesSupabase);
var verTablas = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, juegos, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, supabase.from("juegos").select("*")];
            case 1:
                _a = _b.sent(), juegos = _a.data, error = _a.error;
                if (error)
                    console.log(error);
                return [2 /*return*/, juegos];
        }
    });
}); };
// verTablas()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
var insetarDato = function () { return __awaiter(void 0, void 0, void 0, function () {
    var insertar, _a, data, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                insertar = {
                    game: "Hollow Knight",
                    created_by: 1,
                    image: "https://gamefaqs.gamespot.com/a/box/0/9/2/620092_front.jpg",
                    uuid_front_end: "123,123,123",
                };
                return [4 /*yield*/, supabase.from("juegos").insert([insertar])];
            case 1:
                _a = _b.sent(), data = _a.data, error = _a.error;
                return [2 /*return*/, data];
        }
    });
}); };
insetarDato().then(function (e) { return e; });
verTablas()
    .then(function (data) { return console.log(data); })
    .catch(function (error) { return console.log(error); });
// Importar dotenv
// import * as dotenv from "dotenv";
// Usar dotenv
// dotenv.config();
// type DB_typs = PoolConfig & {
//   host: string;
//   database: string;
//   user: string;
//   password: string | number;
//   connectionLimit: number;
//   multipleStatements: boolean;
// };
// const dbConfig: DB_typs = {
//   host: process.env.DB_HOST || "",
//   database: process.env.DB_DATABASE_NAME || "",
//   user: process.env.DB_USER || "",
//   password: process.env.DB_PASS || "",
//   connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT || "0", 5), // Limite de conexiones
//   multipleStatements: true, // Ejecuta multiples llamadas SQL
// };
// /* crear coneccion con : createPool */
// export const sql: Pool = mysql.createPool(dbConfig);
