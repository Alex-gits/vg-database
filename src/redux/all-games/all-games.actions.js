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