function solution(d) {
  var total = '';
  total += String(d.getUTCFullYear());
  total += String(d.getUTCDay());
  total += String(d.getUTCMonth());
  return numerologize(total);
}

function numerologize(dateSegment) {
  do {
    var dateSegment = sumSegment(simplifySegment(dateSegment));
  } while (dateSegment > 9);
  return dateSegment;
}

function simplifySegment(dateSegment) {
  return String(dateSegment).split("");
}

function sumSegment(dataSegment) {
  var segmentTotal = 0;
  dataSegment.forEach(function(element) {
    segmentTotal += Number(element);
  });
  return segmentTotal;
}

