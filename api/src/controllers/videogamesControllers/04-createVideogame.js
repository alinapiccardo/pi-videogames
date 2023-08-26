/*
📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/

const { Videogame, Genre } = require("../../db.js");

const createVideogame = async ({
	name,
	description,
	platforms,
	image,
	releaseDate,
	rating,
	genreIds,
}) => {
	const newVideogame = await Videogame.create({
		name,
		description,
		platforms,
		image,
		releaseDate,
		rating,
		genreIds,
		created: true,
	});
	if (genreIds && genreIds.length > 0) {
		const genres = await Genre.findAll({
			where: {
				id: genreIds,
			},
		});

		await newVideogame.addGenres(genres);
	}
	const updatedVideogame = await newVideogame.reload({
		include: Genre, // Reload the video game with associated genres
	});

	console.log(updatedVideogame);
	return updatedVideogame;
};

module.exports = { createVideogame };
