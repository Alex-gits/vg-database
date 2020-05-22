import { takeLatest, call, put, all } from 'redux-saga/effects';

import SearchActionTypes from './search.types';

import { fetchSearchResultsSuccess, fetchSearchResultsFailure } from './search.actions';

export function* fetchSearchResultsAsync({ payload }) {
  try {
    if (payload.length <= 1) {
      yield put(fetchSearchResultsSuccess([]));
    } else {
      const result = yield fetch(`https://api.rawg.io/api/games?search=${payload}&page_size=5`);
      const searchResults = yield result.json();
  
      yield put(fetchSearchResultsSuccess(searchResults.results))
    }
  } catch (error) {
    yield put(fetchSearchResultsFailure(error))
  }
}

export function* onFetchSearchResultsStart() {
  yield takeLatest(SearchActionTypes.FETCH_SEARCH_START, fetchSearchResultsAsync);
}

export function* searchSagas() {
  yield all([
    call(onFetchSearchResultsStart)
  ])
}