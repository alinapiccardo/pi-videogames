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
					<img
						src={
							image ||
							"https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"
						}
						alt="imagen"
					/>
					<p>
						Genres:
						{displayGenres.length > 0
							? displayGenres.toString()
							: "No Genres Specified"}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
