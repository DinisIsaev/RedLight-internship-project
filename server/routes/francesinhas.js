const express = require("express");
const router = express.Router();
const { francesinhas } = require("../models");

router.get("/", async (req, res) => {
  const listOfFrancesinhas = await francesinhas.findAll();
  res.json(listOfFrancesinhas);
});

router.post("/", async (req, res) => {
  try {
    const francesinha = req.body;
    await francesinhas.create(francesinha);
    res.json(francesinha);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
