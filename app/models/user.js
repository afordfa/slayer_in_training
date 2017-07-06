
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //  User Identity
    //  email, password @ end
    name: DataTypes.STRING,
    // The email cannot be null, and must be a proper email before creation
    fbId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      //          CONFIGURE ASSOCIATIONS
      //-------------------------------------
      classMethods: {
        //  User has many Trackers
        associate: function (models) {
          User.hasMany(models.Tracker, {});
        }
      }
    });
  return User;

};
