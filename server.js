const express = require("express");
const recipesRouter = require("./recipes/recipes-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.json({ RECIPER_API: "server is running and working.." });
});

module.exports = server;
