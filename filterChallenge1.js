function searchNames( logins ) {
return logins.filter(validateLogin);
}
function validateLogin(userInformation) {
  return userInformation[0].charAt(userInformation[0].length-1) === "_";
}
//Test
describe( "Testing some lists", function(){
  it( "Basic list", function(){
    var a = [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ],
    b = [ [ "bar_", "bar@bar.com" ] ];    
    Test.assertSimilar( searchNames( a ).join(":"), b.join(":"),
      "not correct" );
  } );
} );
