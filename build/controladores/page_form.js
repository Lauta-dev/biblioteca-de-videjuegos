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
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveInfoInDB = exports.renderForm = void 0;
const db_js_1 = require("../db.js");
const dotenv = __importStar(require("dotenv"));
const uuid_1 = require("uuid");
dotenv.config();
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;
const renderForm = (_req, res) => res.render("form");
exports.renderForm = renderForm;
const saveInfoInDB = (req, res) => {
    const { juego, img, created_by } = req.body;
    console.log(req.body);
    const ordenSQL = `insert into ${DB_DATABASE_NAME} (game, created_by, image, uuid_FRONT_END) 
    values 
      (${db_js_1.sql.escape(juego)}, ${created_by}, ${db_js_1.sql.escape(img)}, ${db_js_1.sql.escape((0, uuid_1.v4)())})
     `;
    db_js_1.sql.query(ordenSQL, (err, _out) => err ? console.log(err) : res.redirect("/"));
};
exports.saveInfoInDB = saveInfoInDB;
