function createStringFrom(pairs) {
  var finalString = '';
  var pairKeys = Object.keys(pairs);

  for (var i = 0; i < pairKeys.length; i++) {
    if (i > 0)
      finalString += ",";
    finalString += (pairKeys[i] + " = " + pairs[pairKeys[i]]);
    }
  return finalString;
}
