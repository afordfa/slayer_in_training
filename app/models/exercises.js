module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    // Giving the Author model a name of type STRING
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 250]
      }
    },
    focus: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1, 250]
      }
    }
  });
  return Exercise;
};


