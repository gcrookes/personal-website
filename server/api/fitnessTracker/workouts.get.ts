import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .select("*, type (id, name)")
    .eq("soft_delete", false)
    .order("start_time", { ascending: false });

  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  } else {
    setResponseStatus(event, 200);
    return data;
  }
});
