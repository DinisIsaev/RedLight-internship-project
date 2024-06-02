const express = require("express");
const router = express.Router();
const { Francesinhas } = require("../models");
const { Op } = require("sequelize");

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
router.get("/ofRestaurant/:restaurantId", async (req, res) => {
  const restaurantId = req.params.restaurantId;
  const francesinhas = await Francesinhas.findAll({
    where: { RestaurantId: restaurantId },
  });
  res.json(francesinhas);
});

router.get("/name/:name", async (req, res) => {
  const search = req.params.name;
  const listOfFrancesinhas = await Francesinhas.findAll({
    where: {
      name: {
        [Op.like]: `%${search}%`,
      },
    },
  });
  res.json(listOfFrancesinhas);
});

//Add francesinha
router.post("/", async (req, res) => {
  const francesinha = req.body;
  await Francesinhas.create(francesinha);
  res.json(francesinha);
});

router.delete("/:francesinhaId", async (req, res) => {
  const francesinhaId = req.params.francesinhaId;
  await Francesinhas.destroy({
    where: {
      id: francesinhaId,
    },
  });
});

module.exports = router;
