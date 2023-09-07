const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"videogame",
		{
			id: {
				type: DataTypes.UUID, //(Universal Unique Identifier) es un identificador único universal. Es un tipo de dato que se utiliza para generar identificadores únicos en una base de datos sin depender de una secuencia numérica o de otros tipos de ID convencionales
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			platforms: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			releaseDate: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			rating: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			created: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	);
};
