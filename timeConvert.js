extractHours = function(minutes){return Math.floor(minutes/60)};
extractMinutes = function(minutes){return minutes % 60};

function TimeConvert(minutes,extractHours,extractMinutes) { 
  return extractHours(minutes) + ":" + extractMinutes(minutes);
}
TimeConvert(readline(),extractHours,extractMinutes);  