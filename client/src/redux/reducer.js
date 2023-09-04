import {
	GET_VIDEOGAMES,
	GET_VIDEOGAME_DETAIL,
	CLEAN_DETAIL,
	GET_VIDEOGAME_BY_NAME,
	GET_GENRES,
	CREATE_GAME,
} from "./actions_types";

const initialState = {
	videogames: [],
	allVideogames: [],
	videogameDetail: {},
	genres: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEOGAMES:
			return {
				...state,
				videogames: action.payload,
				allVideogames: action.payload,
			};
		case GET_VIDEOGAME_DETAIL:
			return {
				...state,
				videogameDetail: action.payload,
			};
		case CLEAN_DETAIL:
			return {
				...state,
				videogameDetail: {},
			};
		case GET_VIDEOGAME_BY_NAME:
			return {
				...state,
				videogames: action.payload,
			};
		case GET_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
