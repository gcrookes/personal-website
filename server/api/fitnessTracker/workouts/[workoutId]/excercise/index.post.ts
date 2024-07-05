import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const workoutId = getParamThrowIfEmpty(event, "workoutId");
  const body = await readBody(event);

  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_EXERCISES")
    .insert([{ name: body.name, weight: body.weight, workout: workoutId }])
    .select()
    .single();

  throwErrorIfExists(error);

  setResponseStatus(event, 200);
  return data;
});
