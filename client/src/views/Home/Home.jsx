import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getVideogames());
	}, []);

	return (
		<div>
			<h1>Home</h1>
			<CardsContainer />
		</div>
	);
};

export default Home;
