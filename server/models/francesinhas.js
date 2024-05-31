module.exports = (sequelize, DataTypes) => {
  const Francesinhas = sequelize.define("Francesinhas", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
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
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Francesinhas;
};
