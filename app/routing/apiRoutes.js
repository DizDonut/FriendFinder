// Creating the API routes and exporting them for use
// in the main server file.

// create variable linking our friends list from the friends.js file
var friends = require("../data/friends.js");

// ----------- Routes ------------ //

module.exports = function(app){
  // GET Request
  // The code below handles when a user visits the
  // API friends list page

  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

  // POST Request
  // The code below handles when a user submits the survey
  // form (as a JSON object) and is pushed to the friends
  // object in the friends.js file

  app.post("/api/friends", function(req, res){

    var newUserName = req.body.name;
    var newUserPic = req.body.photo;

    var newUserScores = req.body.scores.map(function(item){

      return parseInt(item, 10)
    });

    console.log(newUserScores);

    friends.push(
      {
        name: newUserName,
        photo: newUserPic,
        scores: newUserScores
      }
    );

    console.log(friends);

    var difference;
    var sum = 0;
    var differences = [];
    var score1 = [];
    var score2 = [];


    //No clue how to get this logice to work...

    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < friends[i].scores.length; j++) {

        score1 = newUserScores[j];
        console.log("\nNew User Score for Question " + [j+1] + ": " + score1);
        score2 = friends[i].scores[j];
        console.log("Friends Array Score for Question " + [j+1] + ": " + score2);

        difference = Math.abs(score1 - score2);
        sum += difference;
        console.log(difference);
      }//end inner loop

      console.log(sum);

    }//end outer loop

    res.json(friends);
  });
}
