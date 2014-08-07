function array_diff(a, b) {
  var array_differences = [];
  a.forEach(function(aElement) {
    if (isLetterAbsent(b,aElement)) 
    array_differences.push(aElement);
  });
  return array_differences;
}
function isLetterAbsent(b,aElement){return b.indexOf(aElement) == -1}
