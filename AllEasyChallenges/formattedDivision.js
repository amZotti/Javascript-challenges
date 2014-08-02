function formattedDivision(num1,num2) {
  var num = num1/num2;
  return commaize(transmuteInt(num.toString()));
}

function transmuteInt(num) {
  if (num.indexOf(".") === -1) { 
    num += ".0000";
  }
  return numAsString;
}

function commaize(num) {
  var starting_point = num.indexOf(".") - 3;
  for (var i = starting_point;i > 0;i -= 3) {
      num = num.slice(0, i) + "," + num.slice(i, num.length);}
  return num;
}



