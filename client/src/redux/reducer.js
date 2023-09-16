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
	ORDER_BY_RATING,
	FILTER_BY_SOURCE,
	FILTER_BY_GENRE,
} from "./actions_types";

const initialState = {
	videogames: [],
	allVideogames: [],
	videogameDetail: {},
	genres: [],
	searchQuery: "",
	filtersApplied: [],
};

const rootReducer = (state = initialState, action) => {
	const allGames = [...state.allVideogames];
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
			const nameToSearch = action.payload.toLowerCase();
			const filteredByName = state.allVideogames.filter((videogame) => {
				return videogame.name.toLowerCase().includes(nameToSearch);
			});
			return {
				...state,
				videogames: filteredByName,
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
				videogames: action.payload,
			};
		case CREATE_GAME:
			return {
				...state,
			};
		case CLEAN_FILTERS:
			return {
				...state,
				videogames: state.allVideogames,
				filtersApplied: [],
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
			}
			return {
				...state,
				videogames:
					action.payload === "all" ? [...state.allVideogames] : orderVideogames,
				filtersApplied:
					action.payload === "all"
						? []
						: [...state.filtersApplied, action.payload],
			};
		case ORDER_BY_RATING:
			const orderByRating = [...state.videogames];
			if (action.payload === "Ascending") {
				orderByRating.sort(function (a, b) {
					if (a.rating > b.rating) {
						return 1;
					}
					if (a.rating < b.rating) {
						return -1;
					}
					return 0;
				});
			} else if (action.payload === "Descending") {
				orderByRating.sort(function (a, b) {
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
					action.payload === "all" ? [...state.allVideogames] : orderByRating,
				filtersApplied:
					action.payload === "all"
						? []
						: [...state.filtersApplied, action.payload],
			};
		case FILTER_BY_SOURCE:
			const selectedSource = action.payload;
			let filteredBySource = [];
			if (selectedSource === "all") {
				filteredBySource = [...state.allVideogames];
			} else if (selectedSource === "API Videogames") {
				filteredBySource = state.allVideogames.filter(
					(videogame) => videogame.created === false
				);
			} else if (selectedSource === "Created Videogames") {
				filteredBySource = state.allVideogames.filter(
					(videogame) => videogame.created === true
				);
			}
			return {
				...state,
				videogames: filteredBySource,
				filtersApplied:
					selectedSource === "all"
						? []
						: [...state.filtersApplied, selectedSource],
			};
		case FILTER_BY_GENRE:
			const selectedGenre = action.payload;
			let filteredByGenre = [];
			if (selectedGenre === "AllGenres") {
				filteredByGenre = [...state.allVideogames];
			} else {
				filteredByGenre = state.allVideogames.filter(
					(videogame) =>
						Array.isArray(videogame.genres) &&
						videogame.genres.some((genre) => genre.name === selectedGenre)
				);
			}
			return {
				...state,
				videogames: filteredByGenre,
				filtersApplied:
					action.payload === "AllGenres"
						? []
						: [...state.filtersApplied, selectedGenre],
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
