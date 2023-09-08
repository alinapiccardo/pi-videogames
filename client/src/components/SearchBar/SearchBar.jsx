import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesByName, setSearchQuery } from "../../redux/actions";

const SearchBar = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	const handleChange = (event) => {
		setName(event.target.value); //guardo el valor del input en un estado local
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(getVideogamesByName(name));
		//setName(""); no lo agrego xq quiero que quede el search query en el value para mostrar que hay una busqueda activa.
	};

	const searchQuery = useSelector((state) => state.searchQuery);

	const handleClearSearch = () => {
		dispatch(setSearchQuery("")); //Limpia el término de búsqueda
		setName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search videogames..."
				value={searchQuery || name}
				onChange={handleChange}
			/>
			<button type="submit">Search</button>
			<button onClick={handleClearSearch}>Back to All Videogames</button>
		</form>
	);
};

export default SearchBar;
