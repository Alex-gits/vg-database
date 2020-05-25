import AllGamesActionTypes from './all-games.types';

export const fetchAllGamesStart = platform => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_START,
  payload: platform
});

export const fetchAllGamesSuccess = allGames => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_SUCCESS,
  payload: allGames
});

export const fetchAllGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_ALLGAMES_FAILURE,
  payload: error
});

export const fetchMoreGamesStart = info => ({
  type: AllGamesActionTypes.FETCH_MORE_GAMES_START,
  payload: info
});

export const fetchMoreGamesSuccess = allGames => ({
  type: AllGamesActionTypes.FETCH_MORE_GAMES_SUCCESS,
  payload: allGames
});

export const fetchMoreGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_MORE_GAMES_FAILURE,
  payload: error
});

export const fetchGenreGamesStart = info => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_START,
  payload: info
});

export const fetchGenreGamesSuccess = genreGames => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_SUCCESS,
  payload: genreGames
});

export const fetchGenreGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_GENRE_GAMES_FAILURE,
  payload: error
});

export const fetchMoreGenreGamesStart = data => ({
  type: AllGamesActionTypes.FETCH_MORE_GENRE_GAMES_START,
  payload: data
});

export const fetchMoreGenreGamesSuccess = genreGames => ({
  type: AllGamesActionTypes.FETCH_MORE_GENRE_GAMES_SUCCESS,
  payload: genreGames
});

export const fetchMoreGenreGamesFailure = error => ({
  type: AllGamesActionTypes.FETCH_MORE_GENRE_GAMES_FAILURE,
  payload: error
});

export const resetGames = () => ({
  type: AllGamesActionTypes.RESET_GENRE_AND_ALL_GAMES
})