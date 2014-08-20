function solution(str, ending){
  var regexString = "(" + ending + ")$";
  var pattern = new RegExp(regexString);
  return pattern.test(str);
}
