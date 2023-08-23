/*📍 GET | /videogames
Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.*/

const axios = require("axios");
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const { API_KEY } = process.env;

const getApiVideogames = async () => {
	const pagePromises = [];

	for (let page = 1; page <= 6; page++) {
		const url = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}`;
		pagePromises.push(axios.get(url));
	}

	const pageResponses = await Promise.all(pagePromises);

	const formattedVideogames = pageResponses.flatMap((response) => {
		return response.data.results.map((game) => {
			//const platforms = game.platforms.map((g) => g.platform);

			return {
				id: game.id,
				name: game.name,
				image: game.background_image,
				//genres: game.genres,
				//platforms: platforms,
				//rating: game.rating,
				//released: game.released,
				created: false,
			};
		});
	});

	return formattedVideogames;
};

const getAllVideogames = async () => {
	const apiVideogamesArr = await getApiVideogames();

	const dbVideogames = await Videogame.findAll({
		include: {
			model: Genre,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});

	const allVideogames = [...dbVideogames, ...apiVideogamesArr];

	return allVideogames;
};

module.exports = {
	getAllVideogames,
	getApiVideogames,
};
