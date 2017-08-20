// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var url = require("url");
var fs = require("fs");
// rerquire friends here to access the Friend array of objects
var friends = require("../data/friends.json");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// GET route to display a JSON of all possible friends
app.get("/api/friends", function(req, res){
  res.json(friends);
});

// POST route to handle incoming survey results
app.post("/api/friends", function(req, res){
  var newFriend = req.body;

  console.log(newFriend);
  friends.push(newFriend);
  fs.writeFile("../data/friends.json", JSON.stringify(friends, null, 2));
  res.json(newFriend);
});


// listener
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
