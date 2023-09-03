import {
	GET_VIDEOGAMES,
	GET_VIDEOGAME_DETAIL,
	CLEAN_DETAIL,
} from "./actions_types";

const initialState = {
	videogames: [],
	allVideogames: [],
	videogameDetail: {},
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
		default:
			return { ...state };
	}
};

export default rootReducer;
