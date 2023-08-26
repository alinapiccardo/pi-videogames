const { Router } = require("express");
const router = Router();
const videogamesRouter = require("./videogamesRouter");
const genresRouter = require("./genresRouter");

// Configurar los routers
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;
