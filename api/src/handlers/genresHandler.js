const { Genre } = require("../db");
const {
	getAllFetchedGenres,
} = require("../controllers/genresControllers/getAllGenres");

const getAllGenresHandler = async (req, res) => {
	try {
		await getAllFetchedGenres(); //Llamar a la funcion controladora que obtiene de la API los generos y los guarda en la BDD
		const dbGenres = await Genre.findAll(); //Obtener los generos desde la base de datos
		res.status(200).json(dbGenres);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

module.exports = {
	getAllGenresHandler,
};
