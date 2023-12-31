import { Notify } from 'quasar'

export const success = (i18nMessage?: string) => {
  Notify.create({
    message: i18nMessage || 'Success',
    position: 'top',
    color: 'positive',
  })
}

export const fail = (i18nMessage?: string, timeout = 10000) => {
  Notify.create({
    message: i18nMessage || 'Oops, something went wrong',
    timeout,
    position: 'top',
    color: 'negative',
    icon: 'info',
    html: true,
  })
}
