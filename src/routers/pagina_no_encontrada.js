import express from "express";
export const router = express.Router();

router.use((req, res) => res.send("Pag no encontrada!"))

