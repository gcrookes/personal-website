import {
  serverSupabaseServiceRole,
  serverSupabaseUser,
} from "#supabase/server";
import {
  getParamThrowIfEmpty,
  throwErrorIfExists,
} from "~/server/utils/paramUtils";
import { Database } from "~/types/supabase";
import { convertWeight } from "~/utils/math";

export default eventHandler(async (event) => {
  const setId = getParamThrowIfEmpty(event, "setId");
  const body = await readBody(event);
  const user = await serverSupabaseUser(event);
  const userId = user?.id ?? "";

  const supabase = serverSupabaseServiceRole<Database>(event);

  const { data: originalSet } = await supabase
    .from("FT_SETS")
    .select("weight, unit")
    .eq("id", setId)
    .eq("user_id", userId)
    .eq("soft_delete", false)
    .single();

  if (!originalSet) {
    throw createError({
      statusCode: 400,
      statusMessage: "Set not found",
    });
  }

  var weight = convertWeight(originalSet.weight, originalSet.unit, body.unit);
  console.log(originalSet);

  const { data: set, error: exerciseError } = await supabase
    .from("FT_SETS")
    .update({ unit: body.unit, weight })
    .eq("id", setId)
    .select()
    .single();

  throwErrorIfExists(exerciseError);
  setResponseStatus(event, 200);
  return set;
});
