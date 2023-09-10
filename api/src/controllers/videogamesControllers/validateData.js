const validateData = ({
	id,
	name,
	description,
	genres,
	platforms,
	image,
	releaseDate,
	rating,
}) => {
	return {
		id,
		name,
		description: description ? description : "No description information",
		platforms,
		image: image
			? image
			: "https://screencraft.org/wp-content/uploads/2021/08/Write-for-Video-Games-scaled.jpg",
		releaseDate: releaseDate ? releaseDate : "No release date information",
		rating,
		genreIds: genres,
		created: true,
	};
};

module.exports = { validateData };
