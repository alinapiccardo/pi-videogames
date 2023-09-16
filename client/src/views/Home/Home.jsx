import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, getVideogamesByName } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import styles from "./Home.module.css";

const Home = ({ fetchedGenres, currentPage, setCurrentPage }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const searchQuery = useSelector((state) => state.searchQuery);
	const videogames = useSelector((state) => state.videogames);
	const filtersApplied = useSelector((state) => state.filtersApplied);

	//Paginacion-------------------------------------------------------------------------
	const [totalPages, setTotalPages] = useState(1); //seguimiento de el numero total de paginas
	const gamesPerPage = 15; //Define 15 videojuegos por página

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastGame = currentPage * gamesPerPage; //determina el índice del último videojuego que se muestra en la página actual (2 * 15 = 30. El último videojuego en la página actual esta en la posición 30 del array de videogames)
	const indexOfFirstGame = indexOfLastGame - gamesPerPage; //restar gamesPerPage (15) al indexOfLastGame para determinar el indice del primer videogame que se muestra en la página actual (30 - 15 = 15, el primer videojuego en la pag actual va a estar en la posicon 15 del array de videogames)
	const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame); //Los índices calculados se usan con la función slice para extraer el conjunto correcto de videojuegos que se mostrarán en la página actual.

	useEffect(() => {
		if (videogames.length > 0) {
			const pages = Math.ceil(videogames.length / gamesPerPage); //120 videogames / 15 games per page = muestra 8 paginas con 15 videojuegos
			setTotalPages(pages);
		}
	}, [videogames]);
	//-----------------------------------------------------------------------------------

	//Search By Name---------------------------------------------------------------------
	useEffect(() => {
		if (searchQuery) {
			dispatch(getVideogamesByName(searchQuery));
		}
		dispatch(getVideogames());
		handlePageChange(1);
		setIsLoading(false); //Cambia el estado cuando se completan las solicitudes
	}, [searchQuery, dispatch, setIsLoading]);
	//-----------------------------------------------------------------------------------

	//Show CardsContainer----------------------------------------------------------------
	const videogamesToShow = () => {
		if (isLoading) {
			return <h1 className={styles.loading}>Loading...</h1>;
		}
		return (
			<CardsContainer videogames={currentGames} searchQuery={searchQuery} />
		);
	};
	//-----------------------------------------------------------------------------------

	return (
		<div className={styles.homeDiv}>
			<div className={styles.componentsDiv}>
				<div className={styles.searchBarContainer}>
					<SearchBar handlePageChange={handlePageChange} />
				</div>
				<div className={styles.filtersContainer}>
					<Filters
						setCurrentPage={setCurrentPage}
						fetchedGenres={fetchedGenres}
						filtersApplied={filtersApplied}
					/>
				</div>
			</div>
			<div className={styles.paginationContainer}>
				<h1 className={styles.title}>My videogames:</h1>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePageChange={handlePageChange}
				/>
			</div>
			<div className={styles.cardsContainer}>{videogamesToShow()}</div>
		</div>
	);
};

export default Home;
