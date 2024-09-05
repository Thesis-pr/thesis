const { Request } = require("../indexdatabase.js");
const getAllRequest = async (req, res) => {
  try {
    const requests = await Request.findAll();
    res.status(200).send(requests);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getRequestById = async (req, res) => {
  try {
    const request = await Request.findAll({
      where: { driverId: req.params.id },
    });
    res.status(200).send(request);
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await Request.findByPk(id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

  
    request["status"] = "accepted";
e
    await request.save();

    return res.status(200).json({
      message: "Attribute updated successfully",
      request,
    });
  } catch (error) {
    console.error("Error updating request:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the request", error });
  }
};

const addRequest = async (req, res) => {
  const newRequest = req.body;
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

module.exports = { addRequest, getAllRequest, getRequestById, updateStatus };
