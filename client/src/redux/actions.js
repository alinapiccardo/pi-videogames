import axios from "axios";
import {
	GET_VIDEOGAMES,
	GET_VIDEOGAME_DETAIL,
	CLEAN_DETAIL,
} from "./actions_types";

const URL = "http://localhost:3001";

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
