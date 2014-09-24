function onLine(points) {
   return allPointsAlign(points);
}

function calculateSlope(point1, point2) {
  var x1 = point1[0];
  var y1 = point1[1];
  var x2 = point2[0];
  var y2 = point2[1];
  var slope = ((y2 - y1)/(x2 - x1));
  return slope;
}

function allPointsAlign(points) {
  var startingPoint = points[0];
  var slope = calculateSlope(startingPoint, points[1]);
  var aligned = true;
  for (var i = 2;i < points.length;i++) {
    if (calculateSlope(startingPoint, points[i]) != slope)
      aligned = false;
  }
  return aligned;
}
onLine([[1,2], [7, 4], [22, 9]]) === true;
