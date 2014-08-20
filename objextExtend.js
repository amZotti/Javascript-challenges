var extend = function() {
  var result = {};
  var rawObjects = Array.prototype.slice.call(arguments);
  rawObjects.forEach(function(element) {
    Object.keys(element).forEach(function(key) {
      result[key] = element[key];
    });
  });
  return result;
}
