module.exports = function(sequelize, DataTypes) {
  var Tracker = sequelize.define("Tracker", {
    // Giving the Author model a name of type STRING
    distance: {
      type: DataTypes.STRING,
      // allowNull: false,
      // defaultValue: "1 mile",
      // validate: {
      //   len: [1, 100]
      // }
    },
    minutes: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    seconds: {
      type: DataTypes.INTEGER,
      // allowNull: true,
      // validate: {
      //   len: [1, 250]
      // }
    },
    date: {
      type: DataTypes.DATE,
      // allowNull: false
    }
  },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Tracker.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }, 
            onDelete: "cascade"
          })
        }
      }
    }
  );
  return Tracker;
};


