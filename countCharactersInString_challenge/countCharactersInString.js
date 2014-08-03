function count (string) {  
  var letterCount = {};
  for (var i = 0;i < string.length; i++) {
    if (letterCount[string[i]]) {
      letterCount[string[i]] += 1;
    }
    else {
      letterCount[string[i]] = 1;
    }
  }
  return letterCount;
}
