import { e as eventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import { s as serverSupabaseServiceRole } from './serverSupabaseServiceRole.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const workouts_get = eventHandler(async (event) => {
  const supabase = serverSupabaseServiceRole(event);
  const { data, error } = await supabase.from("FT_WORKOUTS").select("*").eq("soft_delete", false);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  } else {
    setResponseStatus(event, 200);
    return data;
  }
});

export { workouts_get as default };
//# sourceMappingURL=workouts.get.mjs.map
