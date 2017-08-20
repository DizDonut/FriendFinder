var friends = require("./friends.json");


newSurveyResult();

// ----------- Functions --------------- //
function newSurveyResult(){
  var newUser = [];
  newUser.push(friends[friends.length-1].scores);
  console.log(newUser[0]);
  return newUser[0];
}
