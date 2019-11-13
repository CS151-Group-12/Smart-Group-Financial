export function setTokenToLocalStorage(key, value) {
  return Promise.resolve().then(() => {
    localStorage.setItem(key, value);
  });
}

export function getTokenFromLocalStorage(key) {
  return localStorage.getItem(key);
}
