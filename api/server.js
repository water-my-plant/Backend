const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

// console.log(process.env.JWT_SECRET);

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const plantsRouter = require("../plants/plants-router.js");
const waterRouter = require("../water/water-router.js");
const db = require("../database/dbConfig.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/plants", plantsRouter);
server.use("/api/water", waterRouter);

server.get("/", (req, res) => {
  res.send("Water My Plant");
});

module.exports = server;
