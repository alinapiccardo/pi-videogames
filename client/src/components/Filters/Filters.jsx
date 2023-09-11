import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
	cleanFilters,
	deleteGenres,
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

	const onClose = (filter) => {
		dispatch(deleteGenres(filter));
	};

	return (
		<div className={style.contFilters}>
			<label>Order Videogames</label>
			<select onChange={(event) => handleOrder(event)}>
				<option value="all">...</option>
				<option value="Ascending">Ascending</option>
				<option value="Descending">Descending</option>
				<option value="Rating">Rating</option>
			</select>
		</div>
	);
};

export default Filters;
