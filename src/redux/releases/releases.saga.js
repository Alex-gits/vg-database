import { takeLatest, call, put, all } from 'redux-saga/effects';
import moment from 'moment';

import ReleasesActionTypes from './releases.types';

import { 
  fetchLastMonthReleasesSuccess, 
  fetchLastWeekReleasesSuccess,
  fetchNextWeekReleasesSuccess,
  fetchReleasesFailure,} from './releases.actions';

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

export function* fetchReleasesAsync({ payload }) {
  try {
    if (payload === 'last-month') {
      const response = yield fetch(`${apiUrl}${dates.lastMonth}`);
      const lastMonthReleases = yield response.json();
    
      yield put(fetchLastMonthReleasesSuccess(lastMonthReleases.results));
    } else if (payload === 'last-week') {
      const response = yield fetch(`${apiUrl}${dates.lastWeek}`);
      const lastWeekReleases = yield response.json();
    
      yield put(fetchLastWeekReleasesSuccess(lastWeekReleases.results));
    } else {
      const response = yield fetch(`${apiUrl}${dates.nextWeek}`);
      const nextWeekReleases = yield response.json();
    
      yield put(fetchNextWeekReleasesSuccess(nextWeekReleases.results));
    }

  } catch (error) {
    yield put(fetchReleasesFailure(error))
  }
}

export function* onFetchReleasesStart() {
  yield takeLatest(ReleasesActionTypes.FETCH_RELEASES_START, fetchReleasesAsync);
}

export function* releasesSagas() {
  yield all([
    call(onFetchReleasesStart),
  ]);
}

