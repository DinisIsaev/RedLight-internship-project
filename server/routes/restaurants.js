const express = require("express");
const router = express.Router();
const { Restaurants } = require("../models");
const { Op } = require("sequelize");

//Get all restaurants
router.get("/", async (req, res) => {
  const listOfRestaurants = await Restaurants.findAll();
  res.json(listOfRestaurants);
});

//Get specific restaurant by ID
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurants.findByPk(id);
  res.json(restaurant);
});

//Get all restaurants whose name matches the param
router.get("/name/:name", async (req, res) => {
  const search = req.params.name;
  const listOfRestaurants = await Restaurants.findAll({
    where: {
      name: {
        [Op.like]: `%${search}%`,
      },
    },
  });
  res.json(listOfRestaurants);
});

//Add restaurant
router.post("/", async (req, res) => {
  const restaurant = req.body;
  await Restaurants.create(restaurant);
  res.json(restaurant);
});

//Update restaurant info
router.put("/:restaurantId", async (req, res) => {
  const updatedRestaurant = req.body;
  restaurantId = req.params.restaurantId;
  await Restaurants.update(
    {
      name: updatedRestaurant.name,
      address: updatedRestaurant.address,
      city: updatedRestaurant.city,
      country: updatedRestaurant.country,
      rating: updatedRestaurant.rating,
    },
    {
      where: {
        id: restaurantId,
      },
    }
  );
});

//Delete specific restaurant whose ID matches the param
router.delete("/:restaurantId", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  await Restaurants.destroy({
    where: {
      id: restaurantId,
    },
  });
});

module.exports = router;
