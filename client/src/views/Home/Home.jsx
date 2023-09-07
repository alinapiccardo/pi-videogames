import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getGenres } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	/*1 - montaje del home
	2- se dispara el useEffect y hace el dispatch
	3- se ejecuta su action creator y retorna la funcion
	4- el thunkmiddleware agarra la funcion, la ejecuta y hace el dispatch
	5- el reducer recibe el dispatch, evalua la action y actualiza el estado
	*/

	useEffect(() => {
		dispatch(getGenres());
		dispatch(getVideogames());
		setIsLoading(false); //Cambia el estado cuando se completan las solicitudes
	}, [dispatch, setIsLoading]);

	const videogames = useSelector((state) => state.videogames);
	console.log("videogames", videogames.length);

	return (
		<div>
			<h1>Home</h1>
			<SearchBar />
			{videogames && videogames.length > 0 ? (
				<CardsContainer videogames={videogames} />
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Home;
