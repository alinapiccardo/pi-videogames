/* 📍 GET | /videogames/:idVideogame
Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
El videojuego es recibido por parámetro (ID).
Tiene que incluir los datos del género del videojuego al que está asociado.
Debe funcionar tanto para los videojuegos de la API como para los de la base de datos. */
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../../db.js");
const { API_KEY } = process.env;

const getVideogamesById = async (id, source) => {
	const videogame =
		source === "api"
			? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
					.data
			: await Videogame.findByPk(id);
	return videogame;
};

module.exports = {
	getVideogamesById,
};
