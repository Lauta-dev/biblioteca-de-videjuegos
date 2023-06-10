"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.form = void 0;
const express_1 = __importDefault(require("express"));
const page_form_1 = require("../controladores/page_form");
exports.form = express_1.default.Router();
exports.form.get("/form", page_form_1.renderForm);
exports.form.post("/form", page_form_1.saveInfoInDB);
