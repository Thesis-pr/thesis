const { Driver } = require("../indexdatabase");

const getAllDriver = async (req, res) => {
  try {
    const drivers = await Driver.findAll();
    res.json(drivers);
  } catch (error) {
    console.error(error);
    res.status(500).send("error fetching the drivers");
  }
};

const addDriver = async (req, res) => {
  const newDriver = req.body;
  try {
    const driver = await Driver.create(newDriver);
    res.status(201).send({
      message: "driver created successfully",
      driverId: driver.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("error adding a product");
  }
};

module.exports = {
  getAllDriver,
  addDriver,
};
