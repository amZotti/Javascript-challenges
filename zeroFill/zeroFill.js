function zeroFill(number, size) {
  var number = String(Math.abs(~~number));
  size -= number.length;
  var result = number;
  for (var i = 0;i < size;i++)
    result = "0" + result;
  return result;
}

console.log(zeroFill(11, 11));
console.log(zeroFill(-32, 5));
console.log(zeroFill(0, 3));
