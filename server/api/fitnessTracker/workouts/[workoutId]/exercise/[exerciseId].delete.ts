import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const exerciseId = getParamThrowIfEmpty(event, "exerciseId");

  const supabase = serverSupabaseServiceRole<Database>(event);
  const { data, error } = await supabase
    .from("FT_EXERCISES")
    .update({ soft_delete: true })
    .eq("id", exerciseId);

  throwErrorIfExists(error);
  setResponseStatus(event, 204);
  return data;
});
