/*
📍 POST | /videogames
Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
Toda la información debe ser recibida por body.
Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
*/

const { Videogame, Genre } = require("../db.js");

const createVideogame = async ({
	name,
	description,
	platforms,
	image,
	releaseDate,
	rating,
}) => {
	const newVideogame = await Videogame.create({
		name,
		description,
		platforms,
		image,
		releaseDate,
		rating,
		created: true,
	});
	return newVideogame;
};

module.exports = { createVideogame };
