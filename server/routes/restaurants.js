const express = require("express");
const router = express.Router();
const { Restaurants } = require("../models");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const listOfRestaurants = await Restaurants.findAll();
  res.json(listOfRestaurants);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurants.findByPk(id);
  res.json(restaurant);
});

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

router.post("/", async (req, res) => {
  const restaurant = req.body;
  await Restaurants.create(restaurant);
  res.json(restaurant);
});

router.delete("/:restaurantId", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  await Restaurants.destroy({
    where: {
      id: restaurantId,
    },
  });
});

module.exports = router;
