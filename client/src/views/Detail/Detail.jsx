import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	getVideogameDetail,
	cleanDetail,
	setSearchQuery,
} from "../../redux/actions";

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

	//TODO: if searchQuery -> volver a la misma busqueda desde el Detail
	return (
		<div>
			<h1>Detail</h1>
			{console.log(videogameDetail)}
			{videogameDetail.name ? (
				<div>
					<Link to={`/home`}>
						<button onClick={handleResetSearch}>Home</button>
					</Link>
					<p>id: {videogameDetail.id}</p>
					<p>Name: {videogameDetail.name}</p>

					<img
						src={
							videogameDetail.image
								? videogameDetail.image
								: videogameDetail.background_image ||
								  "https://media.wired.com/photos/62feb60bcea7c0581e825cb0/master/w_2560%2Cc_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg"
						}
						alt="imagen"
					/>
					<p>
						Genres:{" "}
						{Array.isArray(videogameDetail.genres) &&
						videogameDetail.genres.length > 0 ? (
							videogameDetail.genres.map((genre, index) => (
								<span key={index}>{genre.name}</span>
							))
						) : (
							<span>
								{videogameDetail.genres && videogameDetail.genres.length > 0
									? videogameDetail.genres
									: "No Genres Specified"}
							</span>
						)}
					</p>
					<p>Rating: {videogameDetail.rating || "No Rating Specified"}</p>
					<p>
						Released:{" "}
						{videogameDetail.releaseDate
							? videogameDetail.releaseDate
							: videogameDetail.released || "No Release Date Specified"}
					</p>
					<p>
						Platforms:{" "}
						{Array.isArray(videogameDetail.platforms) &&
						videogameDetail.platforms.length > 0 ? (
							videogameDetail.platforms.map((platform, index) => (
								<span key={index}>{platform.platform.name}</span>
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
					<p>
						Description:{" "}
						{videogameDetail.description_raw ||
							videogameDetail.description ||
							"No Description Available"}
					</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Detail;
