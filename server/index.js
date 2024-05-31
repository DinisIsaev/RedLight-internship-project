const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");

app.use(express.json());
app.use(cors());

//Routers
const francesinhasRouter = require("./routes/francesinhas");
app.use("/francesinhas", francesinhasRouter);
const restaurantsRouter = require("./routes/restaurants");
app.use("/restaurants", restaurantsRouter);

db.sequelize.sync().then(() => {
  app.listen(3069, () => {
    console.log("Server running successfully on port 3069");
  });
});
