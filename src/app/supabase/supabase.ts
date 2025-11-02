import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aygcrxwwhambtndmoaql.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5Z2NyeHd3aGFtYnRuZG1vYXFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NTY0NTYsImV4cCI6MjA3NDAzMjQ1Nn0.wt1iJJc0KSFnTz5v5k7UO8z6xu5J8_NIOaa2TJAJ2xU";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
