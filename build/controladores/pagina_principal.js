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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteElementDB = exports.createConnectionDB = void 0;
const db_1 = require("../db");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const createConnectionDB = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: juegos, error } = yield db_1.supabase.from("juegos").select("*");
    error ? console.log(error) : res.render("pagina-principal", { juegos });
});
exports.createConnectionDB = createConnectionDB;
const deleteElementDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params.uuid_front_end.toString();
    const { data, error } = yield db_1.supabase
        .from("juegos")
        .select()
        .eq("uuid_front_end", params)
        .limit(1);
    if (error) {
        console.log(`Hubo un error ${error}`);
        return;
    }
    console.log(data);
    const { data: deletedData, error: deleteError } = yield db_1.supabase
        .from("juegos")
        .delete()
        .match({ params });
    if (deleteError) {
        console.log(`Hubo un error ${exports.deleteElementDB}`);
        res.redirect("/");
        return;
    }
    console.log("Registro eliminado con exito");
    console.log(deletedData);
    console.log(params);
    res.redirect("/");
});
exports.deleteElementDB = deleteElementDB;
