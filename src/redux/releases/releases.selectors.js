import { createSelector } from 'reselect';

const selectReleases = state => state.releases;

export const selectLastMonthReleases = createSelector(
  [selectReleases],
  releases => releases.lastMonthCollection ? releases.lastMonthCollection : []
);

export const selectWeekReleases = createSelector(
  [selectReleases],
  releases => releases.lastWeekCollection ? releases.lastWeekCollection : []
);

export const selectNextWeekReleases = createSelector(
  [selectReleases],
  releases => releases.nextWeekCollection ? releases.nextWeekCollection : []
);

export const selectReleasesFetchingStatus = createSelector(
  [selectReleases],
  releases => releases.loading
);