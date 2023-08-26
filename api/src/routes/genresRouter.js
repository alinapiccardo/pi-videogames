const { Router } = require("express");
const genresRouter = Router();

const { getAllGenresHandler } = require("../handlers/genresHandler");

genresRouter.get("/", getAllGenresHandler);

module.exports = genresRouter;
