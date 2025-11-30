import { supabase } from "@/app/supabase/supabase";

export async function supabaseGetBannerImages(search: string) {
  const { data, error } = await supabase.functions.invoke("pexels-search", {
    body: { query: search },
  });
  if (error) throw Error(error);
  return data;
}
