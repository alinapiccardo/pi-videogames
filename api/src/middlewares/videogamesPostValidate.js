const validatePosts = (req, res, next) => {
	const { name, description, platforms, image, releaseDate, rating, genres } =
		req.body;
	if (!name || !description || !image || !releaseDate || !genres || !rating) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	next();
};

module.exports = validatePosts;
