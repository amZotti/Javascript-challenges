function titleCase(title, minorWords) {
  var titleWords = title.split(" ");
  var minorWords = minorWords.split(" ");
  titleWords.map(function(element) {
    if (minorWords.indexOf(element) != -1) 
      return titleCaseWord(element);
    else
      return element;
  });
}

function titleCaseWord(element) {
  return (element[0].toUpperCase() + element.substr(1));
}
