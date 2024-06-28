import { e as eventHandler, r as readBody, s as setResponseStatus } from './nitro/node-server.mjs';
import { s as serverSupabaseClient } from './serverSupabaseClient.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@supabase/supabase-js';

const saveMessage_post = eventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.name) {
    setResponseStatus(event, 400);
    return { message: "Must provide a name" };
  }
  if (!body.email) {
    setResponseStatus(event, 400);
    return { message: "Must provide a email" };
  }
  if (!body.message) {
    setResponseStatus(event, 400);
    return { message: "Must provide a message" };
  }
  const client = await serverSupabaseClient(event);
  const { error } = await client.from("MESSAGES").insert([
    {
      sender_name: body.name,
      sender_email: body.email,
      sender_message: body.message
    }
  ]);
  if (error !== null) {
    console.log(error);
    setResponseStatus(event, 500);
    return { message: "Failed to save Message" };
  } else {
    setResponseStatus(event, 200);
    return body;
  }
});

export { saveMessage_post as default };
//# sourceMappingURL=saveMessage.post.mjs.map
