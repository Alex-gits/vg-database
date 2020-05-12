import TrendingActionTypes from './trending.types';

export const fetchTrendingStart = () => ({
  type: TrendingActionTypes.FETCH_TRENDING_START
});

export const fetchTrendingSuccess = trendingGames => ({
  type: TrendingActionTypes.FETCH_TRENDING_SUCCESS,
  payload: trendingGames
});

export const fetchTrendingFailure = error => ({
  type: TrendingActionTypes.FETCH_TRENDING_FAILURE,
  payload: error
});