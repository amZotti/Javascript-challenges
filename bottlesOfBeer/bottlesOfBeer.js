var sing = function () {
  var totalBottles = 99;
  var song = [];
  for (var i = 1;i < totalBottles;totalBottles--) {
    song = song.concat(lyric(totalBottles));
  }
  song[song.length - 1] = "Take one down and pass it around, 1 bottle of beer on the wall.";
  return song;
};

var lyric = function(numberOfBottles) {
  return [numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.",
         "Take one down and pass it around, " + (numberOfBottles - 1) + " bottles of beer on the wall."];
}
