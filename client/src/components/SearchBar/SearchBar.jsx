import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesByName, setSearchQuery } from "../../redux/actions";
import styles from "./SearchBar.module.css";

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
		dispatch(setSearchQuery("")); //Limpia el término de búsqueda en el estado global
		setName(""); //Limpia el estado local
	};

	return (
		<div className={styles.divSearchBar}>
			<h1 className={styles.title}>SEARCH YOUR FAVOURTIE GAMES:</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					placeholder="Videogame Name..."
					value={searchQuery || name}
					onChange={handleChange}
					className={styles.input}
				/>
				<button type="submit" className={styles.searchBarBtn}>
					SEARCH
				</button>
				<button onClick={handleClearSearch} className={styles.searchBarBtn}>
					RESET
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
