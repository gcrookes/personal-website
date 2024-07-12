import { serverSupabaseServiceRole } from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";

export default eventHandler(async (event) => {
  const setId = getParamThrowIfEmpty(event, "setId");
  const body = await readBody(event);

  const supabase = serverSupabaseServiceRole<Database>(event);

  const { data: set, error: exerciseError } = await supabase
    .from("FT_SETS")
    .update({ weight: body.weight })
    .eq("id", setId)
    .eq("soft_delete", false)
    .select()
    .single();

  throwErrorIfExists(exerciseError);
  setResponseStatus(event, 200);
  return set;
});
