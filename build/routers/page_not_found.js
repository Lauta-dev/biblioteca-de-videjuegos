"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFound = void 0;
const express_1 = __importDefault(require("express"));
const page_not_found_1 = require("../controladores/page_not_found");
exports.pageNotFound = express_1.default.Router();
exports.pageNotFound.use(page_not_found_1.pageNotFoundController);
