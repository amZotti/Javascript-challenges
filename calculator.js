$(function() {
  $("form").submit(function() {
    calculate();
    return false;
  });
});

function calculate() {
  var left = parseInt($("#left").val());
  var operator = $("#operator").val();
  var right = Number($("#right").val());
  var result = $("#result");
  if (operator == "+") {
    result.html(left + right);
  }
  else if (operator == "-") {
    result.html(left - right);
  }

  else if (operator == "/") {
    result.html(left / right);
  }

  else if (operator == "*") {
    result.html(left * right);

  }

};
