function getSlope(p1, p2) {
  if (p1[0] == p2[0])
    return null;
  else
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}
