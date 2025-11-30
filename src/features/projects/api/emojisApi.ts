import { supabase } from "@/app/supabase/supabase";

export async function supabaseGetEmojis() {
  const { data, error } = await supabase.functions.invoke("quick-task", {
    body: { name: "Functions" },
  });
  if (error) throw Error(error);
  const map = new Map();
  data.forEach((item) => {
    if (!map.has(item.group)) map.set(item.group, []);
    map.get(item.group).push(item);
  });

  return Array.from(map.entries()).map(([groupName, values]) => ({
    groupName,
    values,
  }));
}
