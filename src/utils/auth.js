import Cookies from "js-cookie";

const TokenKey = 'tally-book-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  Cookies.set(TokenKey, token, { expires: 1 });
}

export function removeToken() {
  Cookies.remove(TokenKey)
}
