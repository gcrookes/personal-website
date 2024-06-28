import { e as eventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import { s as serverSupabaseServiceRole } from './serverSupabaseServiceRole.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const _id__get = eventHandler(async (event) => {
  var _a;
  const id = (_a = event.context.params) == null ? void 0 : _a.id;
  const supabase = serverSupabaseServiceRole(event);
  const { data, error } = await supabase.from("FT_WORKOUTS").select("*, type (id, name)").eq("id", id).eq("soft_delete", false).single();
  const { data: exercises, error: exerciseError } = await supabase.from("FT_EXERCISES").select("id, weight").eq("workout", id).eq("soft_delete", false);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  }
  if (exerciseError !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  }
  setResponseStatus(event, 200);
  data.exercises = exercises;
  return data;
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
