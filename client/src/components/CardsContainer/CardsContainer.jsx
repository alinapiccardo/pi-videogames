//COMPONENTE SMART (Contiene la logica)
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardsContainer = () => {
	const videogames = useSelector((state) => state.videogames);

	return (
		<div>
			<div>
				{videogames.map((videogame) => {
					return <Card id={videogame.id} name={videogame.name} />;
				})}
			</div>
		</div>
	);
};

export default CardsContainer;
