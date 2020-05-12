import BestGamesActionTypes from './best-games.types';

export const fetchTopGamesStart = () => ({
  type: BestGamesActionTypes.FETCH_TOP_GAMES_START
});

export const fetchTopGamesSuccess = top100 => ({
  type: BestGamesActionTypes.FETCH_TOP_GAMES_SUCCESS,
  payload: top100
});

export const fetchTopGamesFailure = error => ({
  type: BestGamesActionTypes.FETCH_TOP_GAMES_FAILURE,
  payload: error
});

export const fetchTopOfTheYearStart = () => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_START
});

export const fetchTopOfTheYearSuccess = topOfTheYear => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_SUCESS,
  payload: topOfTheYear
});

export const fetchTopOfTheYearFailure= error => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_FAILURE,
  payload: error
});

export const fetchTopOf2018Start = () => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_2018_START
});

export const fetchTopOf2018Success = topOf2018 => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_2018_SUCESS,
  payload: topOf2018
});

export const fetchTopOf2018Failure= error => ({
  type: BestGamesActionTypes.FETCH_TOP_OF_2018_FAILURE,
  payload: error
});