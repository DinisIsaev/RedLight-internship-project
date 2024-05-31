const express = require("express");
const router = express.Router();
const { Restaurants } = require("../models");

router.get("/", async (req, res) => {
  const listOfRestaurants = await Restaurants.findAll();
  res.json(listOfRestaurants);
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const restaurant = await Restaurants.findByPk(id);
  res.json(restaurant);
});

router.post("/", async (req, res) => {
  const restaurant = req.body;
  await Restaurants.create(restaurant);
  res.json(restaurant);
});

module.exports = router;
