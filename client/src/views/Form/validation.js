const validation = (videogameData) => {
	let errors = {};

	//errors.name
	if (videogameData.name < 1) {
		errors.name = "* Required: Insert a videogame name";
	} else if (videogameData.name.length > 50) {
		errors.name = "* Videogame name too long";
	} else {
		errors.name = "";
	}

	//errors.image
	if (!videogameData.image) {
		errors.image = "* Required: Insert an image URL";
	} else if (
		!/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/.test(
			videogameData.image
		)
	) {
		errors.image = "* Invalid image URL";
	} else {
		errors.image = "";
	}

	//errors.description
	if (!videogameData.description) {
		errors.description = "* Required: Insert a description";
	} else if (videogameData.description.length > 15000) {
		errors.description = "* Description too long";
	} else {
		errors.description = "";
	}

	//errors.platforms
	if (videogameData.platforms.length < 1) {
		errors.platforms = "* Required: Insert at least 1 platform";
	} else {
		errors.platforms = "";
	}

	//errors.releaseDate
	if (!videogameData.releaseDate) {
		errors.releaseDate = "* Required: Insert a release date";
	} else if (!/^\d{2}-\d{2}-\d{2}$/.test(videogameData.releaseDate)) {
		errors.releaseDate = "* Invalid date format. Please use DD-MM-YY";
	} else {
		errors.releaseDate = "";
	}

	//errors.rating
	if (!videogameData.rating) {
		errors.rating = "* Required: Insert a rating";
	} else if (videogameData.rating < 0 || videogameData.rating > 5) {
		errors.rating = "* Rating must be between 0 and 5";
	} else if (videogameData.rating.length > 4) {
		errors.rating = "* Rating must a maximum of 2 decimal points";
	} else {
		errors.rating = "";
	}

	//errors.genres
	if (!videogameData.genres.length) {
		errors.genres = "* Required: Select at least 1 genre";
	} else {
		errors.genres = "";
	}
	return errors;
};

export default validation;
