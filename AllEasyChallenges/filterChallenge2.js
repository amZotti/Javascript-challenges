
function roomMates( rooms, floor ){
  var startingRoom = (floor * 6) - 6;
  var endingRoom = floor * 6;

  return (rooms.slice(startingRoom, endingRoom)).filter(exist);
}

function exist(element) {
  return element;
}

