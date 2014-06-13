


function processParagraphs(p){
  var header = 0;
  while (p[0] == "%"){
    header++;
    p = p.slice(1);
  }
  return {type: (header == 0? "p" : "h" + header), content: p};
}



//Utility functions

function forEach(array, action){
  for (var i = 0;i < array.length;i++){
    action(array[i]);
  }
}

function reduce(combine, base, number_array){
  forEach(number_array, function(element){
    base = combine(base,element);
  });
  return base;
}

function add(a,b){
  return a + b;
}

function sum(number_array){
  return reduce(add,0,number_array);
}
//Add is for 2 numbers
//Sum is for multiple numbers
//reduce = sumLoop
//combine = add
//base = 0
//number_array = userInput
//element = each element within the number array
