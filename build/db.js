"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
require("dotenv").config();
const supabase_js_1 = require("@supabase/supabase-js");
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
exports.supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, opcionesSupabase);
const verTablas = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data: juegos, error } = yield exports.supabase.from("juegos").select("*");
    if (error)
        console.log(error);
    return juegos;
});
const insetarDato = () => __awaiter(void 0, void 0, void 0, function* () {
    const insertar = {
        game: "Hollow Knight",
        created_by: 1,
        image: "https://gamefaqs.gamespot.com/a/box/0/9/2/620092_front.jpg",
        uuid_front_end: "123,123,123",
    };
    const { data, error } = yield exports.supabase.from("juegos").insert([insertar]);
    return data;
});
