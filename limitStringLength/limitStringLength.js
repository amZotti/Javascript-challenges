function solution(string,limit){
  if (limit >= string.length)
    return string;
  else
    return string.substr(0,limit) + "...";
}
