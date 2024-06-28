import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const id = getParamThrowIfEmpty(event, "id");
  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .select("*, type (id, name)")
    .eq("id", id)
    .eq("soft_delete", false)
    .single();

  const { data: exercises, error: exerciseError } = await supabase
    .from("FT_EXERCISES")
    .select("id, weight")
    .eq("workout", id)
    .eq("soft_delete", false);

  throwErrorIfExists(error);
  throwErrorIfExists(exerciseError);

  setResponseStatus(event, 200);
  return { ...data, exercises };
});
