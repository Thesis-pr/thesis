const express = require("express");
const { addRequest, getAllRequest } = require("../controller/request"); 
const routeRequest = express.Router();

routeRequest.post("/add", addRequest);

routeRequest.get("/getAll", getAllRequest);

module.exports = routeRequest;