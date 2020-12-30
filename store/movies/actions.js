
import { fetchAllMovie, fetchMovie } from '../../services';

const PAGE_LIMIT = 10;

export const fetchMovieList = params => ( dispatch, getState ) => {
  const { searchKey, page, totalMovies: prevTotalMovies } = getState().movie;
  if (prevTotalMovies > 0 && params && params.pageChanged) {
    const maxPage = Math.ceil(prevTotalMovies / PAGE_LIMIT);
    if (page >= maxPage) return;
  }
  dispatch({ type: 'FETCH_MOVIE_DETAIL_STARTED' });
  fetchAllMovie({
    ...params,
    page: params && params.pageChanged ? page + 1 : page,
    s: searchKey,
  })
    .then(data => {
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
      const movieList = data.Search.map<MovieOverview>(
        ({ Poster, ...movieRes }) => ({
          title: movieRes.Title,
          imdbID: movieRes.imdbID,
          poster: Poster === 'N/A' ? '' : Poster,
          type: movieRes.Type,
          year: movieRes.Year,
        })
      );
      const totalMovies = parseInt(data.totalResults, 10);
      dispatch({
        type: 'FETCH_MOVIE_LIST_SUCCESS',
        payload: { movieList, totalMovies, pageChanged: Boolean(pageChanged) },
      });
    })
    .catch(error => {
      dispatch({ type: 'FETCH_MOVIE_DETAIL_FAILED', payload: { error } });
    });
};

export const fetchMovieDetail = id => disaptch => {
  disaptch({ type: 'FETCH_MOVIE_DETAIL_STARTED' });
  fetchMovie(id)
    .then(movieDetail => {
      disaptch({
        type: 'FETCH_MOVIE_DETAIL_SUCCESS',
        payload: { movieDetail },
      });
    })
    .catch(error => {
      disaptch({ type: 'FETCH_MOVIE_DETAIL_FAILED', payload: { error } });
    });
};
