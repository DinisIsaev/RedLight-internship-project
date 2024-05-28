module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define("restaurants", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: 5,
        min: 0,
      },
    },
    francesinhas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Restaurants;
};
