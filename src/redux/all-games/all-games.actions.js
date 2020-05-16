import AllGamesActionTypes from './all-games.types';

export const fetchAllGamesStart = () => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_START
});

export const fetchAllGamesSuccess = allGames => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_SUCCESS,
  payload: allGames
});

export const fetchAllGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_FAILURE,
  payload: error
});

export const fetchGenreGamesStart = genre => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_START,
  payload: genre
});

export const fetchGenreGamesSuccess = genreGames => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_SUCCESS,
  payload: genreGames
});

export const fetchGenreGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_FAILURE,
  payload: error
});