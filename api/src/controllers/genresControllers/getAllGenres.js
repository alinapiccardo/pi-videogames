/*
📍 GET | /genres
Obtiene un arreglo con todos los géneros existentes de la API.
En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
*/
const axios = require("axios");
require("dotenv").config();
const { Genre } = require("../../db");
const { API_KEY } = process.env;

const getAllFetchedGenres = async () => {
	const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

	const response = await axios.get(url);
	console.log(response.status);
	const genres = response.data.results.map((genre) => {
		return {
			id: genre.id,
			name: genre.name,
		};
	});
	await Genre.bulkCreate(genres);
};

/*
const apiGenres = response.data.results;
Promise.all(
			apiGenres.map(async (apiGenre) => {
				await Genre.findOrCreate({
					where: { name: apiGenre.name },
					defaults: { id: apiGenre.id, name: apiGenre.name },
				});
			})
		);
*/

module.exports = {
	getAllFetchedGenres,
};
