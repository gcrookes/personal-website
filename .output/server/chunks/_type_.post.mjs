import { e as eventHandler, s as setResponseStatus } from './nitro/node-server.mjs';
import { s as serverSupabaseServiceRole } from './serverSupabaseServiceRole.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const _type__post = eventHandler(async (event) => {
  var _a;
  const type = (_a = event.context.params) == null ? void 0 : _a.type;
  console.log(type);
  if (!type) {
    setResponseStatus(event, 400);
    return { message: "Must select a workout type" };
  }
  const supabase = serverSupabaseServiceRole(event);
  const { data: typeResult } = await supabase.from("FT_WORKOUT_TYPES").select("*").eq("id", type).eq("soft_delete", false);
  if (typeResult && typeResult.length === 0) {
    setResponseStatus(event, 400);
    return { message: "Workout Type doesn't exist" };
  }
  const { data, error } = await supabase.from("FT_WORKOUTS").insert([{ type }]).select().single();
  console.log(data);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return;
  } else {
    setResponseStatus(event, 200);
    return data;
  }
});

export { _type__post as default };
//# sourceMappingURL=_type_.post.mjs.map
