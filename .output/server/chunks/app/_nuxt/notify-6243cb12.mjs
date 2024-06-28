import { N as Notify } from '../server.mjs';

const success = (i18nMessage) => {
  Notify.create({
    message: "Success",
    position: "top",
    color: "positive"
  });
};
const fail = (i18nMessage, timeout = 1e4) => {
  Notify.create({
    message: i18nMessage || "Oops, something went wrong",
    timeout,
    position: "top",
    color: "negative",
    icon: "info",
    html: true
  });
};

export { fail as f, success as s };
//# sourceMappingURL=notify-6243cb12.mjs.map
