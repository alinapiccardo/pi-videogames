//COMPONENTE SMART (Contiene la logica)
import Card from "../Card/Card";

const CardsContainer = ({ videogames }) => {
	//console.log("videogames cards container", videogames);
	return (
		<div>
			<div>
				{videogames.map((videogame) => {
					return (
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
					);
				})}
			</div>
		</div>
	);
};

export default CardsContainer;
