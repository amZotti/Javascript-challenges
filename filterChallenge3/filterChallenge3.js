function searchNames( names ){
  var invalidNames = names.filter(isNameInvalid)
  return findEmailsOfInvalidNames(invalidNames, names) || []
}

function findEmailsOfInvalidNames(invalidNames, names) {
  var emailsOfInvalidNames = [];
  for (var i = 0; i < invalidNames.length; i++)
  emailsOfInvalidNames.push(names[names.indexOf(invalidNames[i]) + 1]);
  return emailsOfInvalidNames;
}

function isNameInvalid (name) {
   return (invalid(name[0]) || invalid(name[name.length - 1]));
}

function invalid(character) {
  return character == ".";
}
