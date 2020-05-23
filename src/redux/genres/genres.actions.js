import GenresActionTypes from './genres.types';

export const fetchGenresStart = () => ({
  type: GenresActionTypes.FETCH_GENRES_START,
});

export const fetchGenresSuccess = genres => ({
  type: GenresActionTypes.FETCH_GENRES_SUCCESS,
  payload: genres
});

export const fetchGenresFailure = error => ({
  type: GenresActionTypes.FETCH_GENRES_FAILURE,
  payload: error
});


export const fetchExactGenreStart = slug => ({
  type: GenresActionTypes.FETCH_EXACT_GENRE_START,
  payload: slug
});

export const fetchExactGenreSuccess = genre => ({
  type: GenresActionTypes.FETCH_EXACT_GENRE_SUCCESS,
  payload: genre
});

export const fetchExactGenreFailure = error => ({
  type: GenresActionTypes.FETCH_EXACT_GENRE_FAILURE,
  payload: error
});