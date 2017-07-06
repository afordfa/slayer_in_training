var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {



  // Get route for retrieving a single exercise
  app.get("/api/exercises/:id", function(req, res) {
    
    db.Exercise.findOne({
        where: {
          id: req.params.id
        }
    }).then(function(dbExercise) {
      console.log(dbExercise);
      res.json(dbExercise);
    });
  });



  // GET route for getting all of the exercises
  app.get("/api/exercises", function(req, res) {
    db.Exercise.findAll({
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });


// GET route for getting all exercises with a specific focus
  app.get("/api/exercises/focus/:focus", function(req, res) {
    
    db.Exercise.findAll({
        where:  ["focus LIKE ?", "%" + req.params.focus + "%"] 
  
        
    }).then(function(dbExercise) {
      console.log(dbExercise);
      res.json(dbExercise);
    });
  });



// GET route for getting all exercises with a specific tag

  app.get("/api/exercises/tag/:tag", function(req, res) {
    
    db.Exercise.findAll({
        where:  ["tags LIKE ?", "%" + req.params.tag + "%"] 
  
        
    }).then(function(dbExercise) {
      console.log(dbExercise);
      res.json(dbExercise);
    });
  });
}