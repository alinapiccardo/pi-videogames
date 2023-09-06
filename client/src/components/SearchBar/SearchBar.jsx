import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handleChange = (event) => {
		setName(event.target.value); //guardo el valor del input en un estado local
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getVideogamesByName(name));
		setName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search videogames..."
				value={name}
				onChange={handleChange}
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
