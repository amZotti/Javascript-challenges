function twoSum(numbers, target) {
  var value;
  numbers.forEach(function(primaryNumber, primaryIndex) {
    numbers.forEach(function(secondaryNumber, secondaryIndex) {
      if (secondaryNumber + primaryNumber == target)
      value = [primaryIndex,secondaryIndex];
    });
  });
  return value || false;
}
