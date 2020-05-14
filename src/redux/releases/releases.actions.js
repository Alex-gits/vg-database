import ReleasesActionTypes from './releases.types';

export const fetchLastMonthReleasesStart = () => ({
  type: ReleasesActionTypes.FETCH_LAST_MONTH_START
});

export const fetchLastMonthReleasesSuccess = last30DaysCollection => ({
  type: ReleasesActionTypes.FETCH_LAST_MONTH_SUCCESS,
  payload: last30DaysCollection
});

export const fetchLastMonthReleasesFailure = error => ({
  type: ReleasesActionTypes.FETCH_LAST_MONTH_FAILURE,
  payload: error
});

export const fetchLastWeekReleasesStart = () => ({
  type: ReleasesActionTypes.FETCH_LAST_WEEK_START
});

export const fetchLastWeekReleasesSuccess = lastWeekCollection => ({
  type: ReleasesActionTypes.FETCH_LAST_WEEK_SUCCESS,
  payload: lastWeekCollection
});

export const fetchLastWeekReleasesFailure = error => ({
  type: ReleasesActionTypes.FETCH_LAST_WEEK_FAILURE,
  payload: error
});

export const fetchNextWeekReleasesStart = () => ({
  type: ReleasesActionTypes.FETCH_NEXT_WEEK_START
});

export const fetchNextWeekReleasesSuccess = nextWeekCollection => ({
  type: ReleasesActionTypes.FETCH_NEXT_WEEK_SUCCESS,
  payload: nextWeekCollection
});

export const fetchNextWeekReleasesFailure = error => ({
  type: ReleasesActionTypes.FETCH_NEXT_WEEK_FAILURE,
  payload: error
});