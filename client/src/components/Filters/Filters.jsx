import style from "./Filters.module.css";
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
		<div>
			<label>Order Videogames</label>
			<select onChange={(event) => handleOrder(event)}>
				<option value="all">...</option>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
				<option value="Rating">Rating</option>
			</select>
			<label>Created Videogames</label>
			<select onChange={(event) => handleFilterBySource(event)}>
				<option value="AllGames">...</option>
				<option value="API Videogames">API Videogames</option>
				<option value="Created Videogames">Created Videogames</option>
			</select>
		</div>
	);
};

export default Filters;
