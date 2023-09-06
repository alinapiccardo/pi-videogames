//COMPONENTE DUMB (Solo presentacional)
import { Link } from "react-router-dom";

const Card = ({
	id,
	name,
	image,
	genres,
	created,
	platforms,
	rating,
	released,
}) => {
	//console.log(genres);
	//console.log(displayGenres);
	//console.log(displayGenres.toString());
	const displayGenres = genres.map((genre) => genre.name);
	return (
		<Link to={`/detail/${id}`}>
			<div>
				<div>
					{/*<p>id: {id}</p>*/}
					<p>Name: {name}</p>
					<img src={image} alt="imagen" />
					<p>
						Genres:
						{displayGenres.toString()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
