import { e as eventHandler } from './nitro/node-server.mjs';
import { s as serverSupabaseClient } from './serverSupabaseClient.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const libraries = eventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const data = await client.from("libraries").select("*");
  return { libraries: data };
});

export { libraries as default };
//# sourceMappingURL=libraries.mjs.map
