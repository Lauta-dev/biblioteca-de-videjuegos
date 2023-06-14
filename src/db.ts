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
