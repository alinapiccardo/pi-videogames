import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogameDetail, cleanDetail } from "../../redux/actions";

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
	//console.log("detail", videogameDetail);

	return (
		<div>
			<h1>Detail</h1>
			{videogameDetail.name ? (
				<div>
					<p>id: {videogameDetail.id}</p>
					<p>Name: {videogameDetail.name}</p>
					<img src={videogameDetail.background_image} alt="imagen" />
					<p>
						Genres:
						{Array.isArray(videogameDetail.genres) ? (
							videogameDetail.genres.map((genre, index) => (
								<span key={index}>{genre.name}</span>
							))
						) : (
							<span>{videogameDetail.genres}</span>
						)}
					</p>
					<p>Rating: {videogameDetail.rating}</p>
					<p>Released: {videogameDetail.released}</p>
					<p>
						Platforms:
						{Array.isArray(videogameDetail.platforms) ? (
							videogameDetail.platforms.map((platform, index) => (
								<span key={index}>{platform.platform.name}</span>
							))
						) : (
							<span>{videogameDetail.platforms}</span>
						)}
					</p>
					<p>Description: {videogameDetail.description_raw}</p>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default Detail;
