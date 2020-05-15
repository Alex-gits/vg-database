import { createSelector } from 'reselect';

const selectBestGames = state => state.bestGames;

export const selectTop100 = createSelector(
  [selectBestGames],
  bestGames => bestGames.top ? bestGames.top : []
);

export const selectBestOfTheYear = createSelector(
  [selectBestGames],
  bestGames => bestGames.topOfTheYear ? bestGames.topOfTheYear : []
);

export const selectBestOf2018 = createSelector(
  [selectBestGames],
  bestGames => bestGames.top2018 ? bestGames.top2018 : []
);

export const selectBestGamesFetchingStatus = createSelector(
  [selectBestGames],
  bestGames => bestGames.loading
);

export const selectTopGames = time => createSelector(
  [selectBestGames],
  bestGames => {
    if (time === 'best-of-all-time') return bestGames.top ? bestGames.top : [];
    if (time === 'best-of-the-year') return bestGames.topOfTheYear ? bestGames.topOfTheYear : [];
    if (time === 'best-of-2018') return bestGames.top2018 ? bestGames.top2018 : [];
  }
)