const express = require("express");
const cors = require("cors");

const userRoute = require("./route/usersRoute");
const driveRoute = require("./route/driverRoute");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/drivers", driveRoute);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
