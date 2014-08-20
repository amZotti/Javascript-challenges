describe("getSlope(p1, p2)", function() {
  it("Should calculate the existing non-zero between 2 points", function() {
    Test.assertEquals(getSlope([1,1],[2,2]), 1, "Incorrect Slope")
    Test.assertEquals(getSlope([11,1],[1,11]), -1, "Incorrect Slope")
  })
  it("Should return null if the line passing through the points is vertical", function() {
    Test.assertSimilar(getSlope([1,1],[1,2]), null, "Incorrect Slope")
  })
  it("Should return null if the same point is given twice", function() {
    Test.assertSimilar(getSlope([1,1],[1,1]), null, "Incorrect Slope")
  })
})
