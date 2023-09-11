//COMPONENTE DUMB (Solo presentacional)
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

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
		<div className={styles.cardStyled}>
			<div>
				{/*<p>id: {id}</p>*/}
				<p className={styles.titleName}>{name}</p>
				<img
					src={
						image ||
						"https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"
					}
					className={styles.imgCard}
					alt="imagen"
				/>
				<p className={styles.genresDisplay}>
					{displayGenres.length > 0
						? displayGenres.map((genre, index) => (
								<div key={index} className={styles["genre-box"]}>
									{genre}
								</div>
						  ))
						: "No Genres Specified"}
				</p>
			</div>
			<Link to={`/detail/${id}`}>
				<button className={styles.button}>Show More</button>
			</Link>
		</div>
	);
};

export default Card;
