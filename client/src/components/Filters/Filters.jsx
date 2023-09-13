import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
	cleanFilters,
	filterBySource,
	filterByGenre,
	orderVideogames,
	orderByRating,
	getVideogames,
} from "../../redux/actions";

const Filters = ({ setCurrentPage, fetchedGenres, filtersApplied }) => {
	const dispatch = useDispatch();

	const handleOrder = (event) => {
		dispatch(orderVideogames(event.target.value));
		setCurrentPage(1);
	};

	const handleFilterByRating = (event) => {
		dispatch(orderByRating(event.target.value));
		setCurrentPage(1);
	};

	const handleFilterByGenre = (event) => {
		dispatch(filterByGenre(event.target.value));
		setCurrentPage(1);
	};

	const handleFilterBySource = (event) => {
		dispatch(filterBySource(event.target.value));
		setCurrentPage(1);
	};

	const handleCleanFilter = () => {
		dispatch(cleanFilters());
		dispatch(getVideogames());
		setCurrentPage(1);
	};

	return (
		<div className={styles.divFilters}>
			<div className={styles.labels}>
				<label>ALPHABETICAL ORDER:</label>
				<select
					onChange={(event) => handleOrder(event)}
					className={styles.select}
				>
					<option value="all" onClick={() => handleCleanFilter()}>
						SHOW ALL
					</option>
					<option value="Ascending">A to Z</option>
					<option value="Descending">Z to A</option>
				</select>
			</div>
			<div className={styles.labels}>
				<label>RATING ORDER:</label>
				<select
					onChange={(event) => handleFilterByRating(event)}
					className={styles.select}
				>
					<option value="all">SHOW ALL</option>
					<option value="Ascending">Less Rating to More Rating</option>
					<option value="Descending">More Rating to Less Rating</option>
				</select>
			</div>
			<div className={styles.labels}>
				<label>SEARCH BY GENRES</label>
				<select
					onChange={(event) => handleFilterByGenre(event)}
					className={styles.select}
				>
					<option value="AllGenres">SHOW ALL</option>
					{fetchedGenres?.map((genre, index) => {
						return (
							<option key={index} value={genre.name}>
								{genre.name}
							</option>
						);
					})}
				</select>
			</div>
			<div className={styles.labels}>
				<label>SELECT ORIGIN:</label>
				<select
					onChange={(event) => handleFilterBySource(event)}
					className={styles.select}
				>
					<option value="all" onClick={() => handleCleanFilter()}>
						SHOW ALL
					</option>
					<option value="API Videogames">API Videogames</option>
					<option value="Created Videogames">Created Videogames</option>
				</select>
			</div>
		</div>
	);
};

export default Filters;
