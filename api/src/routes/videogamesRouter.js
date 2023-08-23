const { Router } = require("express");
const videogamesRouter = Router();
const {
	getVideogamesHandler,
	getVideogamesByIdHandler,
	//searchVideogamesByNameHandler,
} = require("../handlers/videogamesHandler");

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogamesByIdHandler);
//videogamesRouter.get("/name", searchVideogamesByNameHandler);

module.exports = videogamesRouter;
