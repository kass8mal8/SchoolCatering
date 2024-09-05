const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

const authRoute = require("./routes/authentication");
const orderRoute = require("./routes/order");

app.use("/api/auth", authRoute);
app.use("/api/orders", orderRoute);

module.exports = app;
