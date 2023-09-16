import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	getVideogameDetail,
	cleanDetail,
	setSearchQuery,
} from "../../redux/actions";
import styles from "./Detail.module.css";

const Detail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getVideogameDetail(id));
		return () => {
			dispatch(cleanDetail());
		};
	}, [dispatch, id]);

	const videogameDetail = useSelector((state) => state.videogameDetail);

	const handleResetSearch = () => {
		dispatch(setSearchQuery(""));
	};

	return (
		<div className={styles.divDetail}>
			{videogameDetail.name ? (
				<div>
					<div className={styles.divBtn}>
						<Link to={`/home`}>
							<button onClick={handleResetSearch} className={styles.homeBtn}>
								BACK TO ALL VIDEOGAMES
							</button>
						</Link>
					</div>
					<div className={styles.divAllInfo}>
						<div className={styles.infoDiv}>
							<h1 className={styles.title}>{videogameDetail.name}</h1>
							<p className={styles.infoBox}>ID: {videogameDetail.id}</p>
							<img
								src={
									videogameDetail.image
										? videogameDetail.image
										: videogameDetail.background_image ||
										  "https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"
								}
								alt="imagen"
								className={styles.imgDetail}
							/>
							<div className={styles.rowInfo}>
								<div className={styles.genresDisplay}>
									{Array.isArray(videogameDetail.genres) &&
									videogameDetail.genres.length > 0 ? (
										videogameDetail.genres.map((genre, index) => (
											<div key={index} className={styles.infoBox}>
												{genre.name}
											</div>
										))
									) : (
										<span>
											{videogameDetail.genres &&
											videogameDetail.genres.length > 0
												? videogameDetail.genres
												: "No Genres Specified"}
										</span>
									)}
								</div>
								<p className={styles.infoBox}>
									★ {videogameDetail.rating || "No Rating Specified"}
								</p>
								<p className={styles.infoBox}>
									Released:{" "}
									{videogameDetail.releaseDate
										? videogameDetail.releaseDate
										: videogameDetail.released || "No Release Date Specified"}
								</p>
							</div>
							<p className={styles.description}>
								{videogameDetail.description_raw ||
									videogameDetail.description ||
									"No Description Available"}
							</p>
							<p className={styles.infoPlatforms}>
								Platforms:
								{Array.isArray(videogameDetail.platforms) &&
								videogameDetail.platforms.length > 0 ? (
									videogameDetail.platforms.map((platform, index) => (
										<span key={index} className={styles.platforms}>
											{platform.platform.name + " "}
										</span>
									))
								) : (
									<span>
										{videogameDetail.platforms &&
										videogameDetail.platforms.length > 0
											? videogameDetail.platforms
											: "No Platforms Specified"}
									</span>
								)}
							</p>
						</div>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Detail;
