const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRoutes = require("./api/routes/users");

const app = express();

app.use(cors());
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/users", usersRoutes);

module.exports = app;
