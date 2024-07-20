import {
  serverSupabaseServiceRole,
  serverSupabaseUser,
} from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const exerciseId = getParamThrowIfEmpty(event, "exerciseId");
  const body = await readBody(event);

  const supabase = serverSupabaseServiceRole<Database>(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const { data: exercise, error: exerciseError } = await supabase
    .from("FT_EXERCISES")
    .select("id, name, weight")
    .eq("id", exerciseId)
    .eq("user_id", userId)
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
    .eq("user_id", userId)
    .order("created_at");
  throwErrorIfExists(setError);

  let reps = 10;
  let weight = exercise.weight;
  if (!!sets && sets.length > 0) {
    const lastSet = sets.at(-1);
    if (!!lastSet && !!lastSet.reps) {
      reps = lastSet.reps;
      weight = lastSet.weight;
    }
  }
  const { data, error } = await supabase
    .from("FT_SETS")
    .insert([{ weight: weight, reps, exercise: exerciseId, user_id: userId }])
    .select()
    .single();

  throwErrorIfExists(error);
  setResponseStatus(event, 200);
  return data;
});
