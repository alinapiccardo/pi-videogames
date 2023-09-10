//COMPONENTE SMART (Contiene la logica)
import Card from "../Card/Card";

//console.log("videogames cards container", videogames);
const CardsContainer = ({ videogames, searchQuery }) => {
	// Filtrar videojuegos si hay un término de búsqueda
	const filteredVideogames = searchQuery
		? videogames.filter((videogame) =>
				//! Implementar el filtrado si hay un searchQuery
				videogame.name.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: videogames;

	return (
		<div>
			<div>
				{filteredVideogames.map((videogame) => (
					<Card
						key={videogame.id}
						id={videogame.id}
						name={videogame.name}
						image={videogame.image}
						genres={videogame.genres}
						created={videogame.created}
						platforms={videogame.platforms}
						rating={videogame.rating}
						released={videogame.released}
					/>
				))}
			</div>
		</div>
	);
};

export default CardsContainer;
