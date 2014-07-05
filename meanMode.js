
function countOccurances(arr,num){
  var count = 0;
  for (var i = 0;i < arr.length;i++) {
    if (arr[i] == num)
      count += 1;
  }
  return count;
}


function mode(arr){
  var highest_count = 0;
  var highest_num = 0;
  var current_num = 0;
  var current_count = 0;

  for (var i = 0;i < arr.length;i++) {
    current_num = arr[i];
    current_count = countOccurances(arr,current_num);

    if (highest_count < current_count){
      highest_count = current_count;
      highest_num = current_num;
    }
  }
  return highest_num;
}
function mean(arr){
  var total = 0;
  for (var i = 0;i < arr.length;i++){
    total += arr[i];
  }
  return total/arr.length;
}

function MeanMode(arr) { 
  if (mode(arr) == mean(arr)){
    return 1;
  }
  else{
    return 0;
  }
}

//mode occurs the most
////mean =average
//   
//   // keep this function call here 
//   // to see how to enter arguments in JavaScript scroll down
   MeanMode(readline());                            
//
