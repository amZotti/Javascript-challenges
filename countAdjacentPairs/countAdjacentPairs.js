function countAdjacentPairs(searchString) {
  var results = [];
  searchArray = arrayToLowerCase(searchString.split(" "));
  searchArray.forEach(function(element, index, array) {
    if (index > 0) {
      if (elementIsAdjacent(element,array,index) && isNotDuplicate(results,element)) {
        results.push(element);
      }
     }
  });
  return results.length;
}

function arrayToLowerCase(array) {
  return array.map(function(element) {
    return element.toLowerCase()
  });
}

function isNotDuplicate(results,element) {
  return results.indexOf(element) == -1;
}

function elementIsAdjacent(element,array,index) {
  return element == array[index - 1];
}

