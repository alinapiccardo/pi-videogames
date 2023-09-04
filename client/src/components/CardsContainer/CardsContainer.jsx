//COMPONENTE SMART (Contiene la logica)
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardsContainer = () => {
	const videogames = useSelector((state) => state.videogames);
	//console.log(videogames);
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
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CardsContainer;
