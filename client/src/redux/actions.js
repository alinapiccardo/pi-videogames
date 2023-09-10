import axios from "axios";
import {
	GET_VIDEOGAMES,
	GET_VIDEOGAME_DETAIL,
	CLEAN_DETAIL,
	GET_VIDEOGAME_BY_NAME,
	GET_GENRES,
	CREATE_GAME,
	SET_SEARCH_QUERY,
} from "./actions_types";

const URL = "http://localhost:3001";

export const getGenres = () => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/genres`);
		const genres = response.data;
		dispatch({ type: GET_GENRES, payload: genres });
	};
};

export const getVideogames = () => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/videogames`);
		const videogames = response.data;
		dispatch({ type: GET_VIDEOGAMES, payload: videogames });
	};
};

export const getVideogameDetail = (id) => {
	return async (dispatch) => {
		const response = await axios.get(`${URL}/videogames/${id}`);
		const videogame = response.data;
		dispatch({ type: GET_VIDEOGAME_DETAIL, payload: videogame });
	};
};

export const cleanDetail = () => {
	return (dispatch) => {
		dispatch({ type: CLEAN_DETAIL });
	};
};

export const getVideogamesByName = (name) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(
				`${URL}/videogames?videogameName=${name}`
			);
			const videogames = response.data;
			dispatch({ type: GET_VIDEOGAME_BY_NAME, payload: videogames });
		} catch (error) {
			//console.log(error);
			alert("Cant find videogames with that name");
		}
	};
};

export const setSearchQuery = (query) => {
	return (dispatch) => {
		dispatch({ type: SET_SEARCH_QUERY, payload: query });
	};
};

export const createGame = (videogame) => {
	return async (dispatch) => {
		const response = await axios.post(`${URL}/videogames`, videogame);
		const videogameCreated = response.data;
		dispatch({ type: CREATE_GAME, payload: videogameCreated });
	};
};
