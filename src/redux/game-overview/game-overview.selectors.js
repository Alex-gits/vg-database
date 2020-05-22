import { createSelector } from 'reselect';

const selectGame = state => state.gameOverview;

export const selectGameOverview = createSelector(
  [selectGame],
  gameOverview => gameOverview.game
);

export const selectSimilarGames = createSelector(
  [selectGame],
  gameOverview => gameOverview.similarGames ? gameOverview.similarGames : []
);

export const selectYoutubeUrls = createSelector(
  [selectGame],
  gameOverview => gameOverview.ytUrls ? gameOverview.ytUrls : []
);

export const selectGameOverviewStatus = createSelector(
  [selectGame],
  gameOverview => gameOverview.loading
);