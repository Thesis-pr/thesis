const express = require("express");
const cors = require("cors");

const PORT = 3000;
const app = express();
const { driverRouter } = require("./router/driverRouter");

app.use(express.json());
app.use(cors());

app.use("/driver", driverRouter);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
