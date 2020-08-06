const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoutes = require("./api/routes/users");

const app = express();
require("dotenv").config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", usersRoutes);

module.exports = app;
