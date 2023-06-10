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
exports.updateElementDB = exports.viewFormUpdate = exports.deleteElementDB = exports.createConnectionDB = void 0;
const db_js_1 = require("../db.js");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;
const createConnectionDB = (_req, res) => {
    const sqlSelectTable = `select * from ${DB_DATABASE_NAME}`;
    return db_js_1.sql.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query(sqlSelectTable, (err, results) => {
            if (err)
                console.log(`Papu :( ${err}`);
            res.render("pagina-principal", { results });
            connection.release();
        });
    });
};
exports.createConnectionDB = createConnectionDB;
const deleteElementDB = (req, res) => {
    const { id } = req.params;
    const sqlDeleteTable = `delete from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${db_js_1.sql.escape(id)}`;
    db_js_1.sql.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query(sqlDeleteTable, (err, _result) => {
            if (err)
                console.log(err);
            res.redirect("/");
            connection.release();
        });
    });
};
exports.deleteElementDB = deleteElementDB;
const viewFormUpdate = (req, res) => {
    const { id } = req.params;
    const a = `select game from ${DB_DATABASE_NAME} where uuid_FRONT_END = ${db_js_1.sql.escape(id)}`;
    db_js_1.sql.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query(a, (err, result) => {
            if (err)
                console.log(err);
            result.map(({ game }) => res.render("form2", { id, game }));
        });
    });
};
exports.viewFormUpdate = viewFormUpdate;
const updateElementDB = (req, res) => {
    const { juego, img } = req.body;
    const { id } = req.params;
    const sqlUpdateTable = `update ${DB_DATABASE_NAME} set game = ${db_js_1.sql.escape(juego)}, image = ${db_js_1.sql.escape(img)} where uuid_FRONT_END = ${db_js_1.sql.escape(id)}`;
    db_js_1.sql.getConnection((err, connection) => {
        if (err)
            console.log(err);
        connection.query(sqlUpdateTable, (err, _result) => {
            if (err)
                console.log(err);
            res.redirect("/");
            connection.release();
        });
    });
};
exports.updateElementDB = updateElementDB;
