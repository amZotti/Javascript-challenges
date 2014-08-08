function solution(fullText, searchText){
  var pattern = new RegExp(searchText,"g");
  var matches = (fullText.match(pattern) || []);
  return matches.length;
}
