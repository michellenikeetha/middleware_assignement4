const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("../config");

const leavesRoutes = require("./routes/leaves");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/leaves", leavesRoutes);

const port = config.server.port || 3000; // Use the default port 3000 if config.server.port is not defined.

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});