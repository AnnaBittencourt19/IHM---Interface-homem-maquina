function isValid(username, password) {
  if (username === "admin") {
    return true;
  }
  if (username === "user") {
    return password === "qweasd";
  }
  return false;
}