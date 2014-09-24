function countAdjacentPairs(searchString) {
  var totalMatches = 0;
  var previousElement;
  var uniqueMatch = false;
  var strings = searchString.split(" ");
  strings.forEach(function(currentElement){
    if (currentElement.toLowerCase() == previousElement && uniqueMatch == false) {
      totalMatches += 1;
      uniqueMatch = true;
      }
   else 
     uniqueMatch = false;
   previousElement = currentElement.toLowerCase();
  });
  return totalMatches;
}
