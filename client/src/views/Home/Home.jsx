import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getVideogames,
	getGenres,
	getVideogamesByName,
} from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import styles from "./Home.module.css";

const Home = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const videogames = useSelector((state) => state.videogames);
	console.log("videogames amount:", videogames.length);

	const genres = useSelector((state) => state.genres);

	//Obtener el termino de búsqueda actual desde el estado global
	const searchQuery = useSelector((state) => state.searchQuery);

	//Paginacion-------------------------------------------------------------------------
	const [currentPage, setCurrentPage] = useState(1); //seguimiento de la current page
	const [totalPages, setTotalPages] = useState(1); //seguimiento de el numero total de paginas
	const gamesPerPage = 15; //Define 15 videojuegos por página

	useEffect(() => {
		if (videogames.length > 0) {
			const pages = Math.ceil(videogames.length / gamesPerPage); //120 videogames / 15 games per page = muestra 8 paginas con 15 videojuegos
			setTotalPages(pages); //total pages = 8
		}
	}, [videogames]);

	//Se llama cuando se hace clic en un botón de paginación y cambia el estado currentPage al número de página seleccionado, se actualizan los videogames
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastGame = currentPage * gamesPerPage; //determina el índice del último videojuego que se muestra en la página actual (2 * 15 = 30. El último videojuego en la página actual esta en la posición 30 del array de videogames)
	const indexOfFirstGame = indexOfLastGame - gamesPerPage; //restar gamesPerPage (15) al indexOfLastGame para determinar el indice del primer videogame que se muestra en la página actual (30 - 15 = 15, el primer videojuego en la pag actual va a estar en la posicon 15 del array de videogames)
	const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame); //Los índices calculados se usan con la función slice para extraer el conjunto correcto de videojuegos que se mostrarán en la página actual.
	console.log("currentGames: ", currentGames);
	//-----------------------------------------------------------------------------------

	//Montaje Home------------------------------------------------------------------------
	/*
	1 - montaje del home
	2- se dispara el useEffect y hace el dispatch
	3- se ejecuta su action creator y retorna la funcion
	4- el thunkmiddleware agarra la funcion, la ejecuta y hace el dispatch
	5- el reducer recibe el dispatch, evalua la action y actualiza el estado
	*/
	useEffect(() => {
		dispatch(getGenres());
	}, [dispatch]);

	useEffect(() => {
		if (searchQuery) {
			dispatch(getVideogamesByName(searchQuery));
		}
		dispatch(getVideogames());
		setIsLoading(false); //Cambia el estado cuando se completan las solicitudes
	}, [searchQuery, dispatch, setIsLoading]);
	//-----------------------------------------------------------------------------------

	return (
		<div className={styles.homeDiv}>
			<h1 className={styles.title}>YOUR VIDEOGAMES</h1>
			<SearchBar />
			<Filters setCurrentPage={setCurrentPage} />
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			/>
			{currentGames && currentGames.length > 0 ? (
				<CardsContainer videogames={currentGames} searchQuery={searchQuery} />
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Home;
