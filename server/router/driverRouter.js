const express = require("express");
const { getAllDriver, addDriver } = require("../controller/driverController");
const driverRouter = express.Router();

driverRouter.get("/getAll", getAllDriver);

driverRouter.post("/add", addDriver);

module.exports = { driverRouter };
