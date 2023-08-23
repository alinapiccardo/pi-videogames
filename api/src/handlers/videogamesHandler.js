//aca importar los controllers ya hechos, y hacer las funciones handlers de cada peticion, con async await + try catch
/*
📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/
const { getAllVideogames } = require("../controllers/01-getAllVideogames");
const { getVideogamesById } = require("../controllers/02-getVideogamesById");
const {
	searchVideogamesByName,
} = require("../controllers/03-getVideogamesByQuery");

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

module.exports = {
	getVideogamesHandler,
	getVideogamesByIdHandler,
};
