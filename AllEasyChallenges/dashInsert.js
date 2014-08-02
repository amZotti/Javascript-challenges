function isOdd(num) {
  return num % 2 == 1;
}


function DashInsert(num){
  var num_str = num.toString();
  var last_element;
  var current_element;
  var new_num_str = '';
  for (var i = 0; i < num_str.length;i++) {
    current_element = num_str[i]
    if (last_element) {
      if (isOdd(last_element) && isOdd(current_element))
        { new_num_str += "-"; }
    }
    new_num_str += current_element;
    last_element = current_element;
  }
  return new_num_str;
}


    
        
