import {
	GET_VIDEOGAMES,
	GET_VIDEOGAME_DETAIL,
	CLEAN_DETAIL,
	GET_VIDEOGAME_BY_NAME,
	GET_GENRES,
	SET_SEARCH_QUERY,
	CREATE_GAME,
	CLEAN_FILTERS,
	ORDER_VIDEOGAMES,
	FILTER_BY_SOURCE,
	FILTER_BY_GENRE,
	DELETE_GENRES,
} from "./actions_types";

const initialState = {
	videogames: [],
	allVideogames: [],
	videogameDetail: {},
	genres: [],
	searchQuery: "",
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
		case SET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
			};
		case CREATE_GAME:
			return {
				...state,
			};
		case CLEAN_FILTERS:
			return {
				...state,
				videogames: state.allVideogames,
				filterInfo: [],
			};
		case ORDER_VIDEOGAMES:
			const orderVideogames = [...state.videogames];
			if (action.payload === "Ascending") {
				orderVideogames.sort(function (a, b) {
					if (a.name.toUpperCase() > b.name.toUpperCase()) {
						return 1;
					}
					if (a.name.toUpperCase() < b.name.toUpperCase()) {
						return -1;
					}
					return 0;
				});
			} else if (action.payload === "Descending") {
				orderVideogames.sort(function (a, b) {
					if (a.name.toUpperCase() > b.name.toUpperCase()) {
						return -1;
					}
					if (a.name.toUpperCase() < b.name.toUpperCase()) {
						return 1;
					}
					return 0;
				});
			} else if (action.payload === "Rating") {
				orderVideogames.sort(function (a, b) {
					if (a.rating > b.rating) {
						return -1;
					}
					if (a.rating < b.rating) {
						return 1;
					}
					return 0;
				});
			}
			return {
				...state,
				videogames:
					action.payload === "all" ? [...state.allVideogames] : orderVideogames,
			};
		case FILTER_BY_SOURCE:
			const dbApiVideogames = [...state.allVideogames];
			const videogamesFilter =
				action.payload === "API Videogames"
					? dbApiVideogames.filter(
							(videogamegame) => videogamegame.created === false
					  )
					: action.payload === "Created Videogames"
					? dbApiVideogames.filter(
							(videogamegame) => videogamegame.created === true
					  )
					: dbApiVideogames;
			return {
				...state,
				orderedVideogames: videogamesFilter,
				filterInfo: action.payload === "AllGames" ? [] : [action.payload],
			};
		case FILTER_BY_GENRE:
			const filteredByGenre =
				action.payload === "All"
					? [...state.allVideogames]
					: state.allVideogames.filter(
							(videogame) =>
								videogame.genres &&
								Array.isArray(videogame.genres) &&
								videogame.genres.includes(action.payload)
					  );
			return {
				...state,
				videogames: filteredByGenre,
				filterInfo:
					action.payload === "Genres"
						? [...state.filterInfo]
						: state.filterInfo.includes(action.payload)
						? [...state.filterInfo]
						: [...state.filterInfo, action.payload],
			};
		case DELETE_GENRES:
			return {
				...state,
				filterInfo: action.payload,
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
