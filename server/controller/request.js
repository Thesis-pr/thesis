const { Request } = require("../indexdatabase.js");
const getAllRequest = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.status(200).send(requests);
  } catch (err) {
    res.status(404).send(err);
  }
};

const addRequest = async (req, res) => {
  const newRequest = req.body;
  console.log("request", newRequest)
  try {
    const request = await Request.create(newRequest);
    res.status(201).send({
      message: "Request created successfully",
      requestId: request.id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding the request");
  }
};

module.exports = {
    getAllRequest,
    addRequest
}