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
  const workoutId = getParamThrowIfEmpty(event, "workoutId");
  const body = await readBody(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_EXERCISES")
    .insert([
      {
        name: body.name,
        weight: body.weight,
        workout: workoutId,
        user_id: userId,
      },
    ])
    .select()
    .single();

  throwErrorIfExists(error);
  if (data != null) {
    const { data: sets } = await supabase
      .from("FT_SETS")
      .insert([
        { weight: body.weight, reps: 10, exercise: data?.id, user_id: userId },
      ])
      .select()
      .single();
    data.sets = sets;
  }

  setResponseStatus(event, 200);
  return data;
});
