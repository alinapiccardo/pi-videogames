const { Router } = require("express");
const videogamesRouter = Router();
const { getVideogamesHandler } = require("../handlers/videogamesHandler");

videogamesRouter.get("/", getVideogamesHandler);

module.exports = videogamesRouter;
