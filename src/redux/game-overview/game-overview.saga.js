import { takeLatest, call, put, all } from 'redux-saga/effects';

import GameOverviewTypes from './game-overview.types';
import { fetchGameSuccess, fetchGameFailure } from './game-overview.actions';

export function* fetchGameOverviewAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/${payload}`);
    const game = yield response.json();
  
    yield put(fetchGameSuccess(game));
  } catch (error) {
    yield put(fetchGameFailure(error));
  }
}

export function* onFetchGameOverviewStart() {
  yield takeLatest(GameOverviewTypes.FETCH_GAME_START, fetchGameOverviewAsync);
}

export function* gameOverviewSaga() {
  yield all([
    call(onFetchGameOverviewStart)
  ]);
}