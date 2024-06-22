const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

const authRoute = require("./routes/authentication");

app.use("/api/auth", authRoute);

module.exports = app;
