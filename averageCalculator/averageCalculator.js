var Calculator = {
 average: function() {
    var rawNumbers = arguments;
    var amountOfNumbers = rawNumbers.length;
    var total = 0;
    for (var i = 0;i < rawNumbers.length; i++) {
      total += rawNumbers[i];
    }
    return total/amountOfNumbers || 0;
  }
};
