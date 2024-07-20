import { serverSupabaseServiceRole } from "#supabase/server";
import { serverSupabaseUser } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const id = getParamThrowIfEmpty(event, "workoutId");
  const supabase = serverSupabaseServiceRole<Database>(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .select("*, type (id, name)")
    .eq("id", id)
    .eq("soft_delete", false)
    .eq("user_id", userId)
    .single();
  throwErrorIfExists(error);

  const { data: exercises, error: exerciseError } = await supabase
    .from("FT_EXERCISES")
    .select("id, name, weight")
    .eq("workout", id)
    .eq("soft_delete", false)
    .eq("user_id", userId)
    .order("created_at");
  throwErrorIfExists(exerciseError);

  const updatedExercises = exercises?.map((exercise) => {
    return {
      ...exercise,
      sets: [] as any[],
    };
  });

  if (!!exercises) {
    var exerciseIds = exercises?.map((exercise) => exercise.id);
    const { data: sets, error: setError } = await supabase
      .from("FT_SETS")
      .select("id, weight, reps, exercise")
      .in("exercise", exerciseIds)
      .eq("soft_delete", false)
      .eq("user_id", userId)
      .order("created_at");

    throwErrorIfExists(setError);
    updatedExercises?.forEach((exercise) => {
      exercise.sets = sets?.filter((set) => set.exercise === exercise.id) ?? [];
    });
  }

  setResponseStatus(event, 200);
  return { ...data, exercises: updatedExercises };
});
