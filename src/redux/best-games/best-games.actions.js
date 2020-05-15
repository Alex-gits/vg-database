import BestGamesActionTypes from './best-games.types';

export const fetchBestGamesStart = time => ({
  type: BestGamesActionTypes.FETCH_BEST_GAMES_START,
  payload: time
});

export const fetchTopGamesSuccess = top100 => ({
  type: BestGamesActionTypes.FETCH_TOP_GAMES_SUCCESS,
  payload: top100
});

export const fetchTopOfTheYearSuccess = topOfTheYear => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_SUCESS,
  payload: topOfTheYear
});

export const fetchTopOf2018Success = topOf2018 => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_2018_SUCESS,
  payload: topOf2018
});

export const fetchBestGamesFailure = error => ({
  type: BestGamesActionTypes.FETCH_BEST_GAMES_FAILURE,
  payload: error
});