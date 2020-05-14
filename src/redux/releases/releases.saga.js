import { takeLatest, call, put, all } from 'redux-saga/effects';
import moment from 'moment';

import ReleasesActionTypes from './releases.types';

import { 
  fetchLastMonthReleasesSuccess, 
  fetchLastMonthReleasesFailure,
  fetchLastWeekReleasesSuccess,
  fetchLastWeekReleasesFailure,
  fetchNextWeekReleasesSuccess,
  fetchNextWeekReleasesFailure } from './releases.actions';

const apiUrl = 'https://api.rawg.io/api/games?page_size=40&dates=';

const prevMonthFirstDay = new moment().subtract(1, 'months').date(1).format().slice(0, 10);
const prevMonthLastDay = new moment().subtract(1, 'months').endOf('month').format().slice(0, 10);

const prevWeekFirstDay = new moment().subtract(1, 'weeks').startOf('isoWeek').format().slice(0, 10);
const prevWeekLastDay = new moment().subtract(1, 'weeks').endOf('isoWeek').format().slice(0, 10);

const nextWeekFirstDay = new moment().add(1, 'weeks').startOf('isoWeek').format().slice(0, 10);
const nextWeekLastDay = new moment().add(1, 'weeks').endOf('isoWeek').format().slice(0, 10);

const dates = {
  lastMonth: `${prevMonthFirstDay},${prevMonthLastDay}`,
  lastWeek: `${prevWeekFirstDay},${prevWeekLastDay}`,
  nextWeek: `${nextWeekFirstDay},${nextWeekLastDay}`
}

export function* fetchLastMonthAsync() {
  try {
    const response = yield fetch(`${apiUrl}${dates.lastMonth}`);
    const lastMonthReleases = yield response.json();
  
    yield put(fetchLastMonthReleasesSuccess(lastMonthReleases.results));
  } catch (error) {
    yield put(fetchLastMonthReleasesFailure(error))
  }
}

export function* fetchLastWeekAsync() {
  try {
    const response = yield fetch(`${apiUrl}${dates.lastWeek}`);
    const lastWeekReleases = yield response.json();
  
    yield put(fetchLastWeekReleasesSuccess(lastWeekReleases.results));
  } catch (error) {
    yield put(fetchLastWeekReleasesFailure(error))
  }
}

export function* fetchNextWeekAsync() {
  try {
    const response = yield fetch(`${apiUrl}${dates.nextWeek}`);
    const nextWeekReleases = yield response.json();
  
    yield put(fetchNextWeekReleasesSuccess(nextWeekReleases.results));
  } catch (error) {
    yield put(fetchNextWeekReleasesFailure(error))
  }
}

export function* onFetchLast30DaysStart() {
  yield takeLatest(ReleasesActionTypes.FETCH_LAST_MONTH_START, fetchLastMonthAsync);
}

export function* onFetchLastWeekStart() {
  yield takeLatest(ReleasesActionTypes.FETCH_LAST_WEEK_START, fetchLastWeekAsync);
}

export function* onFetchNextWeekStart() {
  yield takeLatest(ReleasesActionTypes.FETCH_NEXT_WEEK_START, fetchNextWeekAsync);
}

export function* releasesSagas() {
  yield all([
    call(onFetchLast30DaysStart),
    call(onFetchLastWeekStart),
    call(onFetchNextWeekStart)
  ]);
}

