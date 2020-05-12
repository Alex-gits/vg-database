import { takeLatest, put, all, call } from 'redux-saga/effects';

import { fetchTrendingSuccess, fetchTrendingFailure } from './trending.actions';
import TrendingActionTypes from './trending.types';

export function* fetchTrendingGamesAsync() {
  try {
    const response = yield fetch('https://api.rawg.io/api/games/lists/main?ordering=-relevance');
    const trendingGames = yield response.json();

    yield put(fetchTrendingSuccess(trendingGames.results));
  } catch (error) {
    yield put(fetchTrendingFailure(error));
  }
}

export function* onFetchTrendingGamesStart() {
  yield takeLatest(TrendingActionTypes.FETCH_TRENDING_START, fetchTrendingGamesAsync);
}

export function* trendingSagas() {
  yield all([
    call(onFetchTrendingGamesStart)
  ]);
}