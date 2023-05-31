export const EMAIL_REGEX = new RegExp(
  /^(([^<>*?/%#=()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
)

export const PHONE_REGEX = new RegExp(/^\+\d{1,3}\d{1,3}\d{4,}$/)
