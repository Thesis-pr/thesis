const express = require("express");
const cors = require("cors");

const userRoute = require("./route/usersRoute");
const driveRoute = require("./route/driverRoute");
const requestRoute = require("./route/request");

const PORT = 5000;
const app = express();



// app.use(express.json());
app.use(express.json({ limit: '100mb' }));
app.use(cors());

app.use("/users", userRoute);
app.use("/drivers", driveRoute);
app.use("/request", requestRoute);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
