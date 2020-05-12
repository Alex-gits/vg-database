import { createSelector } from 'reselect';

const selectAllGames = state => state.allGames;

export const selectAllGamesCollection = createSelector(
  [selectAllGames],
  allGames => allGames.allGamesCollection ? allGames.allGamesCollection : []
);

export const selectAllGamesFetchingStatus = createSelector(
  [selectAllGames],
  allGames => allGames.loading
)