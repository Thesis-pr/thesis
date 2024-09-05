const express = require("express");
const {
  addRequest,
  getAllRequest,
  getRequestById,
  updateStatus,
} = require("../controller/request");
const routeRequest = express.Router();

routeRequest.post("/add", addRequest);

routeRequest.get("/getAll", getAllRequest);
routeRequest.get("/getOne/:id", getRequestById);
routeRequest.put("/update/:id", updateStatus);

module.exports = routeRequest;
