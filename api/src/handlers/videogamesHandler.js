//aca importar los controllers ya hechos, y hacer las funciones handlers de cada peticion, con async await + try catch

const { getAllVideogames } = require("../controllers/01-getAllVideogames");
const { getVideogamesById } = require("../controllers/02-getVideogamesById");
const {
	searchVideogamesByName,
} = require("../controllers/03-getVideogamesByQuery");
const { createVideogame } = require("../controllers/04-createVideogame");

const getVideogamesByIdHandler = async (req, res) => {
	const { id } = req.params;
	const source = isNaN(id) ? "db" : "api";
	try {
		const videogame = await getVideogamesById(id, source);
		res.status(200).json(videogame);
	} catch (err) {
		console.log(err);
		res.status(404).json({ error: err.message });
	}
};

const getVideogamesHandler = async (req, res) => {
	const { videogameName } = req.query;
	try {
		const videogames = videogameName
			? await searchVideogamesByName(videogameName)
			: await getAllVideogames();
		res.status(200).json(videogames);
	} catch (err) {
		console.log(err);
		res.status(404).json({ error: err.message });
	}
};

const createVideogamesHandler = async (req, res) => {
	const { name, description, platforms, image, releaseDate, rating, genres } =
		req.body;

	try {
		const newVideogame = await createVideogame({
			name,
			description,
			platforms,
			image,
			releaseDate,
			rating,
			//genres: genres,
			created: true,
		});
		res.status(201).json(newVideogame);
	} catch (err) {
		console.error(err);
		res.status(404).json({ error: err.message });
	}
};

module.exports = {
	getVideogamesHandler,
	getVideogamesByIdHandler,
	createVideogamesHandler,
};
