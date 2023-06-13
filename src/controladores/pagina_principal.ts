import { Response, Request } from "express";
import { supabase } from "../db";

import * as dotenv from "dotenv";
dotenv.config();

export const createConnectionDB = async (_req: Request, res: Response) => {
  const { data: juegos, error } = await supabase.from("juegos").select("*");
  error ? console.log(error) : res.render("pagina-principal", { juegos });
};

export const deleteElementDB = async (req: Request, res: Response) => {
  const uuid_front_end = req.params.uuid_front_end.toString();

  const { data, error } = await supabase
    .from("juegos")
    .select()
    .eq("uuid_front_end", uuid_front_end)
    .limit(1);

  if (error) {
    console.log(`Hubo un error ${error}`);
    return;
  }
  console.log(data);

  if (data.length > 0) {
    const { data: deletedData, error: deleteError } = await supabase
      .from("juegos")
      .delete()
      .match({ uuid_front_end });

    if (deleteError) {
      console.log(`Hubo un error ${deleteElementDB}`);
      res.redirect("/");
      return;
    }
  }

  console.log("Registro eliminado con exito");
  res.redirect("/");
};
