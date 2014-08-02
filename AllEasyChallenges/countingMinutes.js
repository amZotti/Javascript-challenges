function getTotalMinutes(timeObject){
  var totalMinutes = 0;

//Time of Day calculation
  if (timeObject.timeOfDay == "pm")
    totalMinutes += 12 * 60;

//Hours calculation
  totalMinutes += timeObject.hours * 60;
  
//Minutes calculation
  totalMinutes += timeObject.minutes;

  return totalMinutes;
}

  function getTimeObject(timeString) {
    var time = timeString.split(":");
    
      return {
        hours: parseInt(time[0]),
        minutes: parseInt(time[1].substr(0,2)),
        timeOfDay: time[1].substr(2)
      };
}

  function calculateMinutes(timeString) {
   var  timeObject = getTimeObject(timeString);
   var  totalMinutes = getTotalMinutes(timeObject);
    return totalMinutes;
  }

function  CountingMinutesI(str){
  var times = str.split("-");
  return calculateMinutes(times[0]) - calculateMinutes(times[1]);
}


