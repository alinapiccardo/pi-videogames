//COMPONENTE SMART (Contiene la logica)
import Card from "../Card/Card";

import styles from "./CardsContainer.module.css";

const CardsContainer = ({ videogames, searchQuery }) => {
	const filteredVideogames = searchQuery
		? videogames.filter((videogame) =>
				videogame.name.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: videogames;

	return (
		<div>
			<div className={styles.divCards}>
				{console.log("filteredVideogames", filteredVideogames)}
				{filteredVideogames.length > 0 ? (
					filteredVideogames.map((videogame) => (
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
					))
				) : (
					<h1>No videogames to be shown</h1>
				)}
			</div>
		</div>
	);
};

export default CardsContainer;
