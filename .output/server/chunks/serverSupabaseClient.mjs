import { createClient } from '@supabase/supabase-js';
import { u as useRuntimeConfig, d as defu, g as getCookie } from './nitro/node-server.mjs';

const serverSupabaseClient = async (event) => {
  const {
    supabase: { url, key, cookieName, clientOptions }
  } = useRuntimeConfig().public;
  let supabaseClient = event.context._supabaseClient;
  if (!supabaseClient) {
    const options = defu({
      auth: {
        detectSessionInUrl: false,
        persistSession: false,
        autoRefreshToken: false
      }
    }, clientOptions);
    supabaseClient = createClient(url, key, options);
    event.context._supabaseClient = supabaseClient;
  }
  const { data } = await supabaseClient.auth.getSession();
  if (data?.session?.user?.aud !== "authenticated") {
    const accessToken = getCookie(event, `${cookieName}-access-token`);
    const refreshToken = getCookie(event, `${cookieName}-refresh-token`);
    if (!accessToken || !refreshToken) {
      return supabaseClient;
    }
    await supabaseClient.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken
    });
  }
  return supabaseClient;
};

export { serverSupabaseClient as s };
//# sourceMappingURL=serverSupabaseClient.mjs.map
