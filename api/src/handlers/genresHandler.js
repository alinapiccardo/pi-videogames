const { Genre } = require("../db");
const {
	getAllFetchedGenres,
} = require("../controllers/genresControllers/getAllGenres");

const getAllGenresHandler = async (req, res) => {
	try {
		//Verificar si la bdd está vacía
		const countGenres = await Genre.count();
		//Si está vacía, llamar a getAllFetchedGenres
		if (countGenres === 0) {
			await getAllFetchedGenres();
		}
		const dbGenres = await Genre.findAll();
		res.status(200).json(dbGenres);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: err.message });
	}
};

module.exports = {
	getAllGenresHandler,
};
