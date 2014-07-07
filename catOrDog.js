var i = 0;
var counter = 0;
var pets = [["http://www.jeremynoeljohnson.com/wp-content/uploads/2014/06/crazy_cat_3.jpg",false],
["http://i0.wp.com/kiddingkid.com/wp-content/uploads/2013/08/cats.jpg",false],
["http://static.ddmcdn.com/gif/earliest-dogs-660x433-130306-chow-chow-660x433.jpg",true],
["http://upload.wikimedia.org/wikipedia/commons/d/d6/Czechoslovakian-wolfdog-profile_big.jpg",true]];
var answer;
nextImage();

$(function() {
  $("#dog").submit(function(){
    checkIfDog(answer);
    if (notEndOfGame()) {
      nextImage();
    }
    return false;
  });

  $("#cat").submit(function(){
    checkIfCat(answer);
    if (notEndOfGame()) {
      nextImage();
    }
    return false;
  });
});

function checkIfDog(answer){
  if (answer == true) {
    correct();
  }
  else {
    incorrect();
  }
}

function checkIfCat(answer){
  if (answer == false) {
    correct();
  }
  else {
    incorrect();
  }
}

function nextImage(){
  answer = pets[i][1];
  $("img").attr("src",pets[i][0]);
  i++;
}

function correct() {
  $("#correct").html("That is correct! Good job bucko!");
  counter++;
  updateScore();
}

function incorrect() {
  $("#correct").html("That is incorrect!");
  counter--;
  updateScore();
}

function updateScore(){
  $("#score").html(counter);
}

function notEndOfGame(){
  if (i == pets.length) {
    $("img").fadeOut();
    $("#dog").fadeOut();
    $("#cat").fadeOut();
    $("#correct").fadeOut();
    $("h3").html("Final score: ");
    $("#endOfGameMsg").html("Alright, that's all you get for now. Good game!");
  }
  else {
    return true;
  }
}
