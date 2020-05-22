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

export const fetchMoreTrendingStart = page => ({
  type: TrendingActionTypes.FETCH_MORE_TRENDING_START,
  payload: page
});

export const fetchMoreTrendingSuccess = trendingGames => ({
  type: TrendingActionTypes.FETCH_MORE_TRENDING_SUCCESS,
  payload: trendingGames
});

export const fetchMoreTrendingFailure = error => ({
  type: TrendingActionTypes.FETCH_MORE_TRENDING_FAILURE,
  payload: error
});

export const resetTrending = () => ({
  type: TrendingActionTypes.RESET_TRENDING
})