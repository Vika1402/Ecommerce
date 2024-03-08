/**
 * this the starting file of the project
 * 1. expree
 * 2.mongoose
 */

const express = require("express");
const mongoose = require("mongoose");
const serverConfig = require("./configs/server.config");

const server_config = require("./configs/server.config");
const app = express();

app.listen(serverConfig.port, () => {
  console.log("server started at port number ",serverConfig.port);
});
