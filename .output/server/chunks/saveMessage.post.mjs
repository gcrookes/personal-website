import { e as eventHandler, r as readBody } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const saveMessage_post = eventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  return {
    hello: "world from post"
  };
});

export { saveMessage_post as default };
//# sourceMappingURL=saveMessage.post.mjs.map
