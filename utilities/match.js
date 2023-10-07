function match(re, str) {
  return curry(function (re, str) {
    return str.match(re);
  })(re)(str);
}
