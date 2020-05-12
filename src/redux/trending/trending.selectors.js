import { createSelector } from 'reselect';

const selectTrending = state => state.trending;

export const selectTrendingGames = createSelector(
  [selectTrending],
  trending => trending.trendingGames ? trending.trendingGames : []
);

export const selectTrendingGamesStatus = createSelector(
  [selectTrending],
  trending => trending.loading
);