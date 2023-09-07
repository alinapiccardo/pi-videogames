const validatePosts = (req, res, next) => {
	const { name, platforms, rating, genres } = req.body;

	//console.log(name, description, platforms, image, releaseDate, rating, genres);

	if (
		!name ||
		!rating ||
		genres.length === 0 ||
		!platforms ||
		rating < 0 ||
		rating > 5
	) {
		return res.status(400).json({ error: "Missing or invalid fields" });
	}
	next();
};

module.exports = validatePosts;
