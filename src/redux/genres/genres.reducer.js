import GenresActionTypes from './genres.types';

const INITIAL_STATE = {
  loading: false,
  genresCollection: [],
  genre: null,
  error: null
}

const genresReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GenresActionTypes.FETCH_GENRE_GAMES_START:
    case GenresActionTypes.FETCH_EXACT_GENRE_START:
      return {
        ...state,
        loading: true
      }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genresCollection: action.payload,
        loading: false,
        error: null
      }
    case GenresActionTypes.FETCH_EXACT_GENRE_SUCCESS:
      return {
        ...state,
        genre: action.payload,
        loading: false,
        error: null
      }
    case GenresActionTypes.FETCH_GENRES_FAILURE:
    case GenresActionTypes.FETCH_EXACT_GENRE_FAILURE:
      return {
        ...state,
        genresCollection: [],
        genre: null,
        error: action.payload,
        loading: false
      }
    default: 
      return state;
  }
}

export default genresReducer;