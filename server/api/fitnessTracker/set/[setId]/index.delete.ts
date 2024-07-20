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
  const setId = getParamThrowIfEmpty(event, "setId");
  const supabase = serverSupabaseServiceRole<Database>(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const { data: set, error: exerciseError } = await supabase
    .from("FT_SETS")
    .update({ soft_delete: true })
    .eq("id", setId)
    .eq("user_id", userId)
    .eq("soft_delete", false)
    .select()
    .single();

  throwErrorIfExists(exerciseError);
  setResponseStatus(event, 200);
  return set;
});
