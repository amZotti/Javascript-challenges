function squareSum(numbers) {
  return numbers.reduce(square,0);
  }

function square(previousValue,currentValue) {
  return previousValue + (currentValue * currentValue);
  }
