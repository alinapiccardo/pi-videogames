//COMPONENTE DUMB (Solo presentacional)
import { Link } from "react-router-dom";

const Card = ({ id, name, image, genres }) => {
	return (
		<Link to={`/detail/${id}`}>
			<div>
				<div>
					<p>id:{id}</p>
					<p>Name:{name}</p>
					<img src={image} alt="imagen" />
					<p>
						{" "}
						Genres:
						{genres.map((genre) => (
							<span key={genre.id}>{genre.name}</span>
						))}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
