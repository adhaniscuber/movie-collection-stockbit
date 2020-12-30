export const initialState  = {
  loading: false,
  error: null,
  movieDetails: {},
  movieList: [],
  page: 1,
  searchKey: 'movie',
  totalMovies: 0,
  searchFieldShown: false,
}

export const movieReducer = (state = initialState, action ) => {
  const { page, movieList } = state;
  switch (action.type) {
    case 'SET_SEARCH_KEY':
      return {
        ...state,
        movieList: [],
        searchKey: action.payload.searchKey,
        page: 1,
        searchFieldShown: false,
      };
    case 'TOGGLE_SEARCH_FIELD':
      return { ...state, searchFieldShown: !state.searchFieldShown };
    case 'FETCH_MOVIE_LIST_STARTED':
    case 'FETCH_MOVIE_DETAIL_STARTED':
      return { ...state, loading: true, error: null };
    case 'FETCH_MOVIE_LIST_FAILED':
    case 'FETCH_MOVIE_DETAIL_FAILED':
      if (action.payload.error) {
        const { error } = action.payload;
        return {
          ...state,
          loading: false,
          error: error instanceof Error ? error.message : error,
          ...(action.type === 'FETCH_MOVIE_LIST_FAILED' && { totalMovies: 0 }),
        };
      }
      return state;
    case 'FETCH_MOVIE_LIST_SUCCESS':
      if (action.payload.movieList.length > 0) {
        const { movieList: movieListPayload, pageChanged } = action.payload;
        return {
          ...state,
          loading: false,
          totalMovies: action.payload.totalMovies,
          ...(pageChanged
            ? { page: page + 1, movieList: [...movieList, ...movieListPayload] }
            : { movieList: movieListPayload }),
        };
      }
      return { ...state, loading: false };
    case 'FETCH_MOVIE_DETAIL_SUCCESS':
      return {
        ...state,
        loading: false,
        movieDetails: {
          ...state.movieDetails,
          [action.payload.movieDetail.imdbID]: action.payload.movieDetail,
        },
      };
    case 'RESET_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}
