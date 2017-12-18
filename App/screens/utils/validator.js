
export const isEmpty = (val) => {
  if (isNull(val)) { return true }
  if (isString(val)) { return val.len === 0 }
  return false
}

export const isName = (val) => {
  if (!isString(val)) { return false }
}

export const isPhoneNumber = (val) => {
  return false
}

function isString (val) {
  return typeof val === 'string'
}

function isNull (val) {
  return val === null
}
