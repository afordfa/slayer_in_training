var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


  // Get route for retrieving a user
  app.get("/api/users/:id", function(req, res) {
    
    db.User.findOne({
        where: {
          fbId: req.params.id
        }
    }).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });


//for testing only
  app.get("/api/users", function(req, res) {
    
    db.User.findAll({}).then(function(dbUser) {
      console.log(dbUser);
      res.json(dbUser);
    });
  });  

  // POST route for adding a new admin
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    }).catch(function(error) {
      console.log(error)
    });
  });
} 