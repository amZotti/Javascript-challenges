function zeroFill(number, size) {
  var number = String(Math.abs(~~number));
  var difference = (number == 0)? 0 : 1;
  var zeroes = Array(size - difference).join("0");
  return zeroes + number;
}

Test.expect(zeroFill(11, 5) == "00011", "zeroFill succeeds. All hail the Queen!");
Test.expect(zeroFill(11, 11) == "00000000011", "zeroFill succeeds. All hail the Queen!");

Test.assertEquals(zeroFill(-32, 5), "00032", "zeroFill succeeds, even with negative number.");
Test.assertEquals(zeroFill(0, 3), "000", "zeroFill succeeds, even with zero.");
