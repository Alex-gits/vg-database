import { createSelector } from 'reselect';

const selectGame = state => state.gameOverview;

export const selectGameOverview = createSelector(
  [selectGame],
  gameOverview => gameOverview.game
);

export const selectGameOverviewStatus = createSelector(
  [selectGame],
  gameOverview => gameOverview.loading
);