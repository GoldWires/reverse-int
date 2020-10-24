module.exports = function reverse (n) {
  if (n < 0) {
      n = n*(-1);
  }
  var p = '';
  for(var i = n.toString().length - 1; i >= 0; i--){
    p = p.toString() + n.toString()[i];
  }
  return p;
}
