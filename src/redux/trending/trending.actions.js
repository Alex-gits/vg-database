import TrendingActionTypes from './trending.types';

export const fetchTrendingStart = page => ({
  type: TrendingActionTypes.FETCH_TRENDING_START,
  payload: page
});

export const fetchTrendingSuccess = trendingGames => ({
  type: TrendingActionTypes.FETCH_TRENDING_SUCCESS,
  payload: trendingGames
});

export const fetchTrendingFailure = error => ({
  type: TrendingActionTypes.FETCH_TRENDING_FAILURE,
  payload: error
});