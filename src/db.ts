// Importar mysql
// import mysql, { Pool, PoolConfig } from "mysql";

require("dotenv").config();

import { createClient } from "@supabase/supabase-js";

// Configuracion para supabase
const opcionesSupabase = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: false,
    detectSessionInUrl: true,
  },
};

const supabaseUrl = process.env.DB_SUPABASE_URL || "";
const supabaseKey = process.env.DB_SUPABASE_KEY || "";
export const supabase: any = createClient(
  supabaseUrl,
  supabaseKey,
  opcionesSupabase
);

const verTablas = async () => {
  const { data: juegos, error } = await supabase.from("juegos").select("*");
  if (error) console.log(error);
  return juegos;
};

// verTablas()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const insetarDato = async () => {
  const insertar = {
    game: "Hollow Knight",
    created_by: 1,
    image: "https://gamefaqs.gamespot.com/a/box/0/9/2/620092_front.jpg",
    uuid_front_end: "123,123,123",
  };

  const { data, error } = await supabase.from("juegos").insert([insertar]);
  return data;
};

// insetarDato().then((e) => e);

// verTablas()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

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
