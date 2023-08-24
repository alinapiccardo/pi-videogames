const { Router } = require("express");
const videogamesRouter = Router();
const {
	getVideogamesHandler,
	getVideogamesByIdHandler,
	createVideogamesHandler,
} = require("../handlers/videogamesHandler");
const validatePosts = require("../middlewares/videogamesPostValidate");

videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogamesByIdHandler);
videogamesRouter.post("/", validatePosts, createVideogamesHandler);

module.exports = videogamesRouter;
