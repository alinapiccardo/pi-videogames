import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = () => {
	const dispatch = useDispatch();
	//const videogames = useSelector((state) => state.videogames);

	/*1 - montaje del home
	2- se dispara el useEffect y hace el dispatch
	3- se ejecuta su action creator (GET_VIDEOGAMES) y retorna la funcion
	4- el thunkmiddleware agarra la funcion, la ejecuta y hace el dispatch
	5- el reducer recibe el dispatch, evalua la action y actualiza el estado
	*/
	useEffect(() => {
		dispatch(getVideogames());
	}, [dispatch]);

	return (
		<div>
			<h1>Home</h1>
			<CardsContainer />
		</div>
	);
};

export default Home;
