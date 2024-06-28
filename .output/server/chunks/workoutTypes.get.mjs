import { e as eventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import { s as serverSupabaseServiceRole } from './serverSupabaseServiceRole.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const workoutTypes_get = eventHandler(async (event) => {
  const supabase = serverSupabaseServiceRole(event);
  const { data, error } = await supabase.from("FT_WORKOUT_TYPES").select("*").eq("soft_delete", false);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  } else {
    setResponseStatus(event, 200);
    return data;
  }
});

export { workoutTypes_get as default };
//# sourceMappingURL=workoutTypes.get.mjs.map
