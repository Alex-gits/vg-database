import { takeLatest, put, all, call } from 'redux-saga/effects';

import { fetchAllGamesSuccess, fetchAllGamesFailure } from './all-games.actions';

import AllGamesActionTypes from './all-games.types';

export function* fetchAllGamesAsync() {
  try {
    const response = yield fetch('https://api.rawg.io/api/games?page_size=40');
    const allGames = yield response.json();

    yield put (fetchAllGamesSuccess(allGames.results));
  } catch (error) {
    yield put (fetchAllGamesFailure(error));
  }
}

export function* fetchAllGamesAsyncStart() {
  yield takeLatest(AllGamesActionTypes.FETCH_ALLGAMES_START, fetchAllGamesAsync);
}

export function* allGamesSagas() {
  yield all([
    call(fetchAllGamesAsyncStart)
  ])
}