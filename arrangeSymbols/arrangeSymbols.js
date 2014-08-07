function makeSentence(parts) {
  var partsObject = assessParts(parts);
 return addCommasToWords(addPeriodsToSentence(partsObject))["words"].join(" ");
}

function assessParts(parts) {
  var partsAssessment = {period: 0, comma: 0, words: []};
  parts.forEach(function(element) {
  if (element == ".")
    partsAssessment["period"] += 1
  else if (element == ",")
    partsAssessment["comma"] += 1
  else
    partsAssessment["words"].push(element)
  });
  return partsAssessment
}

function addCommasToWords(partsObject) {
  partsObject["words"].forEach(function(word,index) {
    if (partsObject["comma"] > 0) {
      partsObject["words"][index] += ",";
      partsObject["comma"] -= 1;
    }
  });
  return partsObject
}

function addPeriodsToSentence(partsObject) {
  var lastIndex = partsObject["words"].length - 1;
  for (var i = 0; i < partsObject["period"];i++) {
    partsObject["words"][lastIndex] += ".";
    partsObject["period"] -= 1;
  }
  return partsObject;
}
