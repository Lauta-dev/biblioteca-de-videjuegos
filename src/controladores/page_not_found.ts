import { Request, Response } from "express";

export const pageNotFoundController = (_req: Request, res: Response) =>
  res.render("page_not_found");
