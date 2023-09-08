/*
📍 GET | /videogames/name?="..."
Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el videojuego, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
*/
const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../../db.js");
const { API_KEY } = process.env;
const { Op } = require("sequelize");

const searchVideogamesByName = async (videogameName) => {
	const dbVideogames = await Videogame.findAll({
		where: {
			name: {
				[Op.iLike]: `%${videogameName}%`,
			},
		},
		include: {
			model: Genre,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
		limit: 15,
	});

	const apiResponse = await axios.get(
		`https://api.rawg.io/api/games?key=${API_KEY}&search=${videogameName}`
	);

	const apiVideogames =
		apiResponse.data && apiResponse.data.results
			? apiResponse.data.results.slice(0, 15).map((game) => ({
					id: game.id,
					name: game.name,
					image: game.background_image,
					genres: game.genres
						? game.genres.map((genre) => ({
								id: genre.id,
								name: genre.name,
						  }))
						: [], // Verificación de nulidad para géneros
					platforms: game.platforms
						? game.platforms.map((platform) => ({
								id: platform.platform.id,
								name: platform.platform.name,
						  }))
						: [], // Verificación de nulidad para plataformas
					rating: game.rating,
					released: game.released,
					created: false,
			  }))
			: [];

	const allVideogames = [...dbVideogames, ...apiVideogames];

	if (allVideogames.length === 0) {
		throw new Error("Can't find videogames with that name");
	}

	return allVideogames;
};

module.exports = {
	searchVideogamesByName,
};
