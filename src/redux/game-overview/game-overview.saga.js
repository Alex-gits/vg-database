import { takeLatest, call, put, all } from 'redux-saga/effects';

import GameOverviewTypes from './game-overview.types';
import { 
  fetchGameSuccess, 
  fetchGameFailure,
  fetchSimilarGamesSuccess,
  fetchSimilarGamesFailure,
  fetchYoutubeUrlSuccess,
  fetchYoutubeUrlFailure } from './game-overview.actions';

export function* fetchGameOverviewAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/${payload}`);
    const game = yield response.json();
  
    yield put(fetchGameSuccess(game));
  } catch (error) {
    yield put(fetchGameFailure(error));
  }
}

export function* fetchSimilarGamesAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/${payload}/suggested?page_size=4`);
    const games = yield response.json();
  
    yield put(fetchSimilarGamesSuccess(games.results));
  } catch (error) {
    yield put(fetchSimilarGamesFailure(error));
  }
}

export function* fetchYoutubeUrlsAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games/${payload}/youtube?page_size=3`)
    const videos = yield response.json();

    yield put(fetchYoutubeUrlSuccess(videos.results));
  } catch (error) {
    yield put(fetchYoutubeUrlFailure(error));
  }
}

export function* onFetchGameOverviewStart() {
  yield takeLatest(GameOverviewTypes.FETCH_GAME_START, fetchGameOverviewAsync);
}

export function* onFetchSimilarGamesStart() {
  yield takeLatest(GameOverviewTypes.FETCH_SIMILAR_START, fetchSimilarGamesAsync);
}

export function* onFetchYoutubeUrlsStart() {
  yield takeLatest(GameOverviewTypes.FETCH_YOUTUBE_URL_START, fetchYoutubeUrlsAsync);
}

export function* gameOverviewSaga() {
  yield all([
    call(onFetchGameOverviewStart),
    call(onFetchSimilarGamesStart),
    call(onFetchYoutubeUrlsStart)
  ]);
}