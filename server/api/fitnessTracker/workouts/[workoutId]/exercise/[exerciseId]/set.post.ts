import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const exerciseId = getParamThrowIfEmpty(event, "exerciseId");
  const body = await readBody(event);

  const supabase = serverSupabaseServiceRole<Database>(event);

  const { data: exercise, error: exerciseError } = await supabase
    .from("FT_EXERCISES")
    .select("id, name, weight")
    .eq("id", exerciseId)
    .eq("soft_delete", false)
    .single();
  throwErrorIfExists(exerciseError);

  if (!exercise) {
    throw createError({
      statusCode: 400,
      statusMessage: "exercise not found.",
    });
  }

  const { data: sets, error: setError } = await supabase
    .from("FT_SETS")
    .select("id, weight, reps, exercise")
    .eq("exercise", exerciseId)
    .eq("soft_delete", false)
    .order("created_at");
  throwErrorIfExists(setError);

  let reps = 10;
  if (!!sets && sets.length > 0) {
    const lastSet = sets.at(-1);
    if (!!lastSet && !!lastSet.reps) {
      reps = lastSet.reps;
    }
  }
  const { data, error } = await supabase
    .from("FT_SETS")
    .insert([{ weight: exercise.weight, reps, exercise: exerciseId }])
    .select()
    .single();

  throwErrorIfExists(error);
  setResponseStatus(event, 200);
  return data;
});
