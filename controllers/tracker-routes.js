var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



  // Get route for retrieving a all tracker data for a user
  app.get("/api/tracker/:id", function(req, res) {
    
    db.Tracker.findAll({
        where: {
          UserId: req.params.id
        }
    }).then(function(dbTracker) {
      console.log(dbTracker);
      res.json(dbTracker);
    });
  });

//for testing - need to use the one above to link to individual user's data
  app.get("/api/tracker", function(req, res) {
    
    db.Tracker.findAll({}).then(function(dbTracker) {
      console.log(dbTracker);
      res.json(dbTracker);
    });
  });  

  // POST route for adding a new admin
  app.post("/api/tracker/:id", function(req, res) {
    db.Tracker.upsert(req.body).then(function(dbTime) {
      res.json(dbTime);
      console.log("add time route: "+dbTime);
    }).catch(function(error) {
      console.log(error)
    });
  });
} 