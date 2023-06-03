import express from "express";
import { pageNotFoundController } from "../controladores/page_not_found.js";
export const pageNotFound = express.Router();

pageNotFound.use(pageNotFoundController)
