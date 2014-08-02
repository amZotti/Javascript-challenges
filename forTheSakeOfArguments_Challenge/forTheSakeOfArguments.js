function number() {
var allValuesAreNumbers = true;
for (var i = 0; i < arguments.length;i++) {
  if (!(typeof arguments[i] == 'number')) 
    allValuesAreNumbers = false;
  }
  return allValuesAreNumbers;
}
