var flatten = function (parentArray) {
return reduce(pushArray,[],parentArray);
}

function forEach(array, action) {
  for (var i = 0;i < array.length;i++) {
    action(array[i]);
  }
}

function reduce(combine, base, array) {
  forEach(array, function(element) {
    base = combine(base,element);
  });
  return base;
}

function pushArray(baseArray,tempArray) {
  while (tempArray[0] != undefined) {
  baseArray.push(tempArray.shift()); }
return baseArray;
}
