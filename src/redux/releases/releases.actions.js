import ReleasesActionTypes from './releases.types';

export const fetchReleasesStart = period => ({
  type: ReleasesActionTypes.FETCH_RELEASES_START,
  payload: period
});

export const fetchLastMonthReleasesSuccess = last30DaysCollection => ({
  type: ReleasesActionTypes.FETCH_LAST_MONTH_SUCCESS,
  payload: last30DaysCollection
});


export const fetchLastWeekReleasesSuccess = lastWeekCollection => ({
  type: ReleasesActionTypes.FETCH_LAST_WEEK_SUCCESS,
  payload: lastWeekCollection
});

export const fetchNextWeekReleasesSuccess = nextWeekCollection => ({
  type: ReleasesActionTypes.FETCH_NEXT_WEEK_SUCCESS,
  payload: nextWeekCollection
});

export const fetchReleasesFailure = error => ({
  type: ReleasesActionTypes.FETCH_RELEASES_FAILURE,
  payload: error
});