Array.prototype.square = function() {
  return this.map(function(element) {
    return element * element; });
}

Array.prototype.cube = function() {
  return this.map(function(element) {
    return element * element * element; });
}

Array.prototype.average = function() {
  var total = 0;
  this.forEach(function(element) {
    total += element;
  });
  total = total/this.length;
  return total;
}

Array.prototype.sum = function(){
  return this.reduce(function(base,element) {
    return base + element;
  }
)}

Array.prototype.even = function() {
  return this.filter(function(element) {
    return element % 2 == 0;
  });
}

Array.prototype.odd = function() {
  return this.filter(function(element) {
    return element % 2 == 1;
  });
}
