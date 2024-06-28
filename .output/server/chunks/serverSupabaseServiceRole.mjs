import { createClient } from '@supabase/supabase-js';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';

const serverSupabaseServiceRole = (event) => {
  const {
    supabase: { serviceKey },
    public: {
      supabase: { url }
    }
  } = useRuntimeConfig();
  if (!serviceKey) {
    throw new Error("Missing `SUPABASE_SERVICE_KEY` in `.env`");
  }
  if (!event.context._supabaseServiceRole) {
    const auth = {
      detectSessionInUrl: false,
      persistSession: false,
      autoRefreshToken: false
    };
    const supabaseClient = createClient(url, serviceKey, { auth });
    event.context._supabaseServiceRole = supabaseClient;
  }
  return event.context._supabaseServiceRole;
};

export { serverSupabaseServiceRole as s };
//# sourceMappingURL=serverSupabaseServiceRole.mjs.map
