function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return codeIsCorrect(enteredCode, correctCode) && dateIsCorrect(currentDate, expirationDate);
}

function codeIsCorrect(enteredCode, correctCode) {
  return enteredCode === correctCode
}

function dateIsCorrect(currentDate, expirationDate) {
  var formattedCurrentDate = formatDateStringToArray(currentDate);
  var formattedExpirationDate = formatDateStringToArray(expirationDate);
  return Date.parse(formattedCurrentDate) <= Date.parse(formattedExpirationDate);
}

var months = {
  'January': 1,
  'February':2,
  'March': 3,
  'April': 4,
  'May': 5,
  'June': 6,
  'July': 7,
  'August': 8,
  'September': 9,
  'October': 10,
  'November': 11,
  'December': 12,
};

function formatDateStringToArray(dateString) {
  var formattedDate = dateString.replace(/,/g,"").split(" ");
  formattedDate[0] = months[formattedDate[0]];
  formattedDate[1] = parseInt(formattedDate[1]);
  formattedDate[2] = parseInt(formattedDate[2]);
  return formattedDate;
}


