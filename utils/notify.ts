import { Notify } from "quasar";

export const success = (i18nMessage?: string) => {
  Notify.create({
    message: i18nMessage || "Success",
    position: "top",
    color: "positive",
  });
};

export const fail = (i18nMessage?: string, timeout = 10000) => {
  Notify.create({
    message: i18nMessage || "Oops, something went wrong",
    timeout,
    position: "top",
    color: "negative",
    icon: "info",
    html: true,
  });
};

export interface IConfirmOptions {
  title?: string;
  message?: string;
  cancel?: boolean;
  persistent?: boolean;
  okHandler?: () => void;
  cancelHandler?: () => void;
}

export const confirm = (options: IConfirmOptions) => {
  const {
    title,
    message,
    okHandler,
    cancelHandler,
    cancel = true,
    persistent = false,
  } = options;
  Dialog.create({
    title: title || "Alert",
    message: message || "",
    cancel: cancel,
    persistent,
    html: true,
    dark: true,
    color: "primary",
  })
    .onOk(() => {
      okHandler && okHandler();
    })
    .onCancel(() => {
      cancelHandler && cancelHandler();
    });
};
