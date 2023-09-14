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
	const displayGenres = genres.map((genre) => genre.name);

	return (
		<div className={styles.cardStyled}>
			<div className={styles.cardContent}>
				<div className={styles.cardImg}>
					<img
						src={
							image ||
							"https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"
						}
						className={styles.imgCard}
						alt="imagen"
					/>
				</div>
				<div className={styles.cardInfo}>
					<div className={styles.nameDiv}>
						<p className={styles.titleName}>{name}</p>
					</div>
					<div className={styles.infoDiv}>
						<div className={styles.genresDisplay}>
							{displayGenres.length > 0
								? displayGenres.map((genre, index) => (
										<div key={index} className={styles["genre-box"]}>
											{genre}
										</div>
								  ))
								: "No Genres Specified"}
						</div>
						<p className={styles.rating}>★ {rating}</p>
						<div className={styles.buttonContainer}>
							<Link to={`/detail/${id}`}>
								<button className={styles.startBtn}>START</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
