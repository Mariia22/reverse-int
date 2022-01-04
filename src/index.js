module.exports = function reverse(n) {
  let result;
  if (n >= 0) {
    result =  n.toString().split('').reverse().join('');
  }
  else {
    result = (-1 * n).toString().split('').reverse().join('');
  }

  return parseInt(result);
}
