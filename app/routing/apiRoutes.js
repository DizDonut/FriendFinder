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
    friends.push(req.body);

    

    res.json(friends);
  });
}
