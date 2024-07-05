import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const excerciseId = getParamThrowIfEmpty(event, "excerciseId");

  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_EXERCISES")
    .update({ soft_delete: true })
    .eq("id", excerciseId);

  throwErrorIfExists(error);
  setResponseStatus(event, 204);
  return data;
});
