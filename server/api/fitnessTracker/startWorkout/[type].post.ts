import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const type = event.context.params?.type;
  console.log(type);
  if (!type) {
    setResponseStatus(event, 400);
    return { message: "Must select a workout type" };
  }

  const supabase = serverSupabaseServiceRole<Database>(event);

  const { data: typeResult } = await supabase
    .from("FT_WORKOUT_TYPES")
    .select("*")
    .eq("id", type)
    .eq("soft_delete", false);

  if (typeResult && typeResult.length === 0) {
    setResponseStatus(event, 400);
    return { message: "Workout Type doesn't exist" };
  }

  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .insert([{ type }])
    .select()
    .single();

  console.log(data);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  } else {
    setResponseStatus(event, 200);
    return data;
  }
});
