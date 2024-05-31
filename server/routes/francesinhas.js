const express = require("express");
const router = express.Router();
const { Francesinhas } = require("../models");

//Get all francesinhas
router.get("/", async (req, res) => {
  const listOfFrancesinhas = await Francesinhas.findAll();
  res.json(listOfFrancesinhas);
});

//Get specific francesinha by ID
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const francesinha = await Francesinhas.findByPk(id);
  res.json(francesinha);
});

//Get all francesinhas of a specific restaurant
router.get("/ofRestaurant/:postId", async (req, res) => {
  const restaurantId = req.params.RestaurantId;
  const francesinha = await Francesinhas.findAll({
    where: { RestaurantId: restaurantId },
  });
  res.json(francesinha);
});

//Add francesinha
router.post("/", async (req, res) => {
  const francesinha = req.body;
  await Francesinhas.create(francesinha);
  res.json(francesinha);
});

module.exports = router;
