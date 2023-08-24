const validatePosts = (req, res, next) => {
	const { name, description, platforms, image, releaseDate, rating } = req.body;
	if (
		!name ||
		!description ||
		!platforms ||
		!image ||
		!releaseDate ||
		!rating
	) {
		return res.status(400).json({ error: "Missing required fields" });
	}
	next();
};

module.exports = validatePosts;
