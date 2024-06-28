import { serverSupabaseServiceRole } from "#supabase/server";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const type = event.context.params?.type;
  if (!type) {
    throw createError({
      statusCode: 400,
      statusMessage: "Must select a workout type",
    });
  }

  const supabase = serverSupabaseServiceRole<Database>(event);

  const { data: typeResult } = await supabase
    .from("FT_WORKOUT_TYPES")
    .select("*")
    .eq("id", type)
    .eq("soft_delete", false);

  if (typeResult && typeResult.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Workout Type doesn't exist",
    });
  }

  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .insert([{ type }])
    .select()
    .single();

  if (error !== null) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }

  setResponseStatus(event, 200);
  return data;
});
