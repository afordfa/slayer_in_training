// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");


// Require  Schema
// var History = require("./models/History");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// Requiring our models for syncing
var db = require("./models");


// -------------------------------------------------
require("./controllers/exercise-routes.js")(app);
require("./controllers/tracker-routes.js")(app);
require("./controllers/user-routes.js")(app);

// Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});






// -------------------------------------------------

// Listener
db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});