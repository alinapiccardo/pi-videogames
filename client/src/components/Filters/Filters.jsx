import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
	cleanFilters,
	filterBySource,
	filterByGenre,
	orderVideogames,
} from "../../redux/actions";

const Filters = ({ setCurrentPage }) => {
	const dispatch = useDispatch();

	const [filter, setFilter] = useState("");

	const handleOrder = (event) => {
		dispatch(orderVideogames(event.target.value));
		setCurrentPage(1);
		setFilter(event.target.value);
	};

	const handleFilterBySource = (event) => {
		dispatch(filterBySource(event.target.value));
		setCurrentPage(1);
		setFilter(event.target.value);
	};

	return (
		<div className={styles.divFilters}>
			<div className={styles.labels}>
				<label>ORDER GAMES:</label>
				<select
					onChange={(event) => handleOrder(event)}
					className={styles.select}
				>
					<option value="all">SHOW ALL</option>
					<option value="Ascending">A to Z</option>
					<option value="Descending">Z to A</option>
					<option value="Rating">Rating</option>
				</select>
			</div>
			<div className={styles.labels}>
				<label>SELECT ORIGIN:</label>
				<select
					onChange={(event) => handleFilterBySource(event)}
					className={styles.select}
				>
					<option value="AllGames">SHOW ALL</option>
					<option value="API Videogames">API Videogames</option>
					<option value="Created Videogames">Created Videogames</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
