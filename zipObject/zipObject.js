function zipObject(keys, values) {
  if (keys == undefined)
    return {};
  else if (values == undefined && keys[0].isArray() == true)
    return deconstructTwoDimentionalArray(keys);
  else if (values == undefined && keys[0].isArray() == false)
    return deconstructSingleArray;
  else
    return deconstructTwoArrays(keys, values);
}

function deconstructTwoArrays(keys, values){
  var result = {};
  keys.forEach(function(currentElement,index) {
    result[keys[index]] = values[index];
  });
  return result;
}


function deconstructTwoDimentionalArray(keys) {
  var result = {};
  keys.forEach(function(currentElement) {
    result[currentElement[0]] = currentElement[1];
  });
  return result;
}

function deconstructSingleArray(keys) {
  var result = {};
  keys.forEach(function(element) {
    result[element] = undefined;
  });
  return result;
}

Array.prototype.isArray = function(){return true;}
String.prototype.isArray = function(){return false;}
Number.prototype.isArray = function(){return false;}
