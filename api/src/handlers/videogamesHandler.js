//aca importar los controllers ya hechos, y hacer las funciones handlers de cada peticion, con async await + try catch

const {
	getAllVideogames,
} = require("../controllers/videogamesControllers/getAllVideogames");
const {
	getVideogamesById,
} = require("../controllers/videogamesControllers/getVideogamesById");
const {
	searchVideogamesByName,
} = require("../controllers/videogamesControllers/getVideogamesByQuery");
const {
	createVideogame,
} = require("../controllers/videogamesControllers/createVideogame");
const {
	validateData,
} = require("../controllers/videogamesControllers/validateData");

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
	console.log("Search Query: ", videogameName);
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
			genreIds: genres,
			created: true,
		});
		console.log(newVideogame);
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
