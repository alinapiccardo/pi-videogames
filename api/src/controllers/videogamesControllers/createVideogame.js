/*
📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/
const { Videogame, Genre } = require("../../db.js");
const { Op } = require("sequelize");

const createVideogame = async ({
	name,
	description,
	platforms,
	image,
	releaseDate,
	rating,
	genreIds,
}) => {
	const existingVideogame = await Videogame.findAll({
		//Verifico si el juego ya existe en la base de datos.
		where: {
			name: {
				[Op.iLike]: `%${name}%`, //Condiciono que el name del nuevo juego sea igual a alguno de la DB o lo contenga.
			},
		},
	});
	if (existingVideogame.length > 0) {
		//Si el juego ya existe, retorno un mensaje de error.
		throw new Error("The videogame already exists");
	}

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
		include: Genre,
	});

	return updatedVideogame;
};

module.exports = { createVideogame };
