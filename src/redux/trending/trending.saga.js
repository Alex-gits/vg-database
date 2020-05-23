import { takeLatest, put, all, call } from 'redux-saga/effects';

import { fetchTrendingSuccess, fetchTrendingFailure, fetchMoreTrendingSuccess, fetchMoreTrendingFailure } from './trending.actions';
import TrendingActionTypes from './trending.types';

export function* fetchTrendingGamesAsync() {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/lists/main?ordering=-relevance&page_size=40`);
    const trendingGames = yield response.json();

    yield put(fetchTrendingSuccess(trendingGames.results));
  } catch (error) {
    yield put(fetchTrendingFailure(error));
  }
}

export function* fetchMoreTrendingGamesAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/lists/main?ordering=-relevance&page_size=40&page=${payload}`);
    const trendingGames = yield response.json();

    yield put(fetchMoreTrendingSuccess(trendingGames.results));
  } catch (error) {
    yield put(fetchMoreTrendingFailure(error));
  }
}

export function* onFetchTrendingGamesStart() {
  yield takeLatest(TrendingActionTypes.FETCH_TRENDING_START, fetchTrendingGamesAsync);
}

export function* onFetchMoreTrendingGamesStart() {
  yield takeLatest(TrendingActionTypes.FETCH_MORE_TRENDING_START, fetchMoreTrendingGamesAsync);
}

export function* trendingSagas() {
  yield all([
    call(onFetchTrendingGamesStart),
    call(onFetchMoreTrendingGamesStart)
  ]);
}