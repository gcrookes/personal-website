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
  const id = getParamThrowIfEmpty(event, "workoutId");
  const supabase = serverSupabaseServiceRole<Database>(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const { error } = await supabase
    .from("FT_WORKOUTS")
    .update({ soft_delete: true })
    .eq("user_id", userId)
    .eq("id", id);

  throwErrorIfExists(error);
  setResponseStatus(event, 204);
  return;
});
