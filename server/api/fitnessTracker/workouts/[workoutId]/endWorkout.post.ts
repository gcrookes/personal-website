import {
  serverSupabaseServiceRole,
  serverSupabaseUser,
} from "#supabase/server";
import dayjs from "dayjs";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const workoutId = getParamThrowIfEmpty(event, "workoutId");
  const supabase = serverSupabaseServiceRole<Database>(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const { data, error } = await supabase
    .from("FT_WORKOUTS")
    .update({ end_time: dayjs().toISOString() })
    .eq("id", workoutId)
    .eq("user_id", userId)
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
