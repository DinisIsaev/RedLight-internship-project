module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define("Restaurants", {
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
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        max: 5,
        min: 0,
      },
    },
  });

  Restaurants.associate = (models) => {
    Restaurants.hasMany(models.Francesinhas, {
      onDelete: "cascade",
    });
  };

  return Restaurants;
};
