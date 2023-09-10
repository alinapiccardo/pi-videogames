import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, getGenres } from "../../redux/actions";
import validation from "./validation";
import styles from "./Form.module.css";

const Form = () => {
	const dispatch = useDispatch();

	const [videogameData, setVideogameData] = useState({
		name: "",
		image: "",
		description: "",
		platforms: "",
		releaseDate: "",
		rating: "",
		genres: [],
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;

		setVideogameData({
			...videogameData,
			[property]: value,
		});

		setErrors(
			validation({
				...videogameData,
				[property]: value,
			})
		);
	};

	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	const allGenres = useSelector((state) => state.genres);
	console.log("all genres", allGenres.length);

	const AddGenres = (event) => {
		const isChecked = event.target.checked;
		const value = event.target.value;
		if (isChecked) {
			setVideogameData({
				...videogameData,
				genres: [...videogameData.genres, value],
			});
			setErrors(
				validation({
					...videogameData,
					genres: [...videogameData.genres, value],
				})
			);
		} else {
			setVideogameData({
				...videogameData,
				genres: videogameData.genres.filter((genre) => genre !== value),
			});
			setErrors(
				validation({
					...videogameData,
					genres: videogameData.genres.filter((genre) => genre !== value),
				})
			);
		}
	};

	const handlePlatformChoice = (event) => {
		setVideogameData({
			...videogameData,
			platforms: videogameData.platforms + event.target.value + ", ",
		});
		setErrors(
			validation({
				...videogameData,
				platforms: videogameData.platforms + event.target.value + ", ",
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createGame(videogameData));
		alert("Your videogame was succesfully created");
	};

	return (
		<div>
			<h1>Add our own Videogame</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Name: </label>
					<input
						type="text"
						name="name"
						value={videogameData.name}
						onChange={handleInputChange}
					/>
					{errors.name && <p className="error">{errors.name}</p>}
					<br />
					<div>
						<p>Choose your favorites Genres:</p>
						{allGenres?.map((genre, index) => {
							return (
								<div>
									<input
										id={genre.id}
										key={index}
										type="checkbox"
										onClick={(event) => AddGenres(event)}
										value={genre.id}
									/>
									<label htmlFor={genre.id}>{genre.name}</label>
								</div>
							);
						})}
					</div>
					{errors.genres && <p className="error">{errors.genres}</p>}
					<br />
					<div>
						<label>Platforms </label>
						<select
							onChange={handlePlatformChoice}
							id="platforms"
							name="platforms"
						>
							<option hidden name="platform">
								Choose Platforms List
							</option>
							<option value="PC">PC</option>
							<option value="macOS">macOS</option>
							<option value="Linux">Linux</option>
							<option value="Xbox 360">Xbox 360</option>
							<option value="PlayStation 3">PlayStation 3</option>
							<option value="PlayStation 4">PlayStation 4</option>
							<option value="PlayStation 5">PlayStation 5</option>
							<option value="Android">Android</option>
							<option value="PS Vita">PS Vita</option>
							<option value="Xbox One">Xbox One</option>
							<option value="Nintendo Switch">Nintendo Switch</option>
							<option value="iOS">iOS</option>
							<option value="Xbox Series S/X">Xbox Series S/X</option>
						</select>
						<p>Chosen Platforms: {videogameData.platforms}</p>
						{errors.platforms && <p>{errors.platforms}</p>}
					</div>
					<label htmlFor="releaseDate">Release Date: </label>
					<input
						id="releaseDate"
						type="text"
						name="releaseDate"
						value={videogameData.releaseDate}
						onChange={handleInputChange}
					/>
					{errors.releaseDate && <p className="error">{errors.releaseDate}</p>}
					<br />
					<label htmlFor="rating">Rating: </label>
					<input
						id="rating"
						type="text"
						name="rating"
						value={videogameData.rating}
						onChange={handleInputChange}
					/>
					{errors.rating && <p className="error">{errors.rating}</p>}
					<br />
					<label htmlFor="image">Image: </label>
					<input
						id="image"
						type="text"
						name="image"
						value={videogameData.image}
						onChange={handleInputChange}
					/>
					{errors.image && <p className="error">{errors.image}</p>} <br />
					<label htmlFor="description">Description: </label>
					<textarea
						id="description"
						type="text"
						name="description"
						value={videogameData.description}
						onChange={handleInputChange}
					/>
					{errors.description && <p className="error">{errors.description}</p>}{" "}
					<br />
					<button type="submit">Create Videogame</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
