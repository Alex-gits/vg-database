import { takeLatest, put, call, all } from 'redux-saga/effects';

import GenresActionTypes from './genres.types';
import { 
  fetchGenresSuccess, 
  fetchGenresFailure,
  fetchExactGenreSuccess,
  fetchExactGenreFailure } from './genres.actions';

const apiUrl = 'https://api.rawg.io/api/genres';

export function* fetchGenresAsync() {
  try {
    const response = yield fetch(apiUrl);
    const genres = yield response.json();

    yield put(fetchGenresSuccess(genres.results))
  } catch (error) {
    yield put(fetchGenresFailure(error));
  }
}

export function* fetchExactGenreAsync({ payload }) {
  try {
    const response = yield fetch(`${apiUrl}/${payload}`);
    const genre = yield response.json();

    yield put(fetchExactGenreSuccess(genre))
  } catch (error) {
    yield put(fetchExactGenreFailure(error));
  }
}

export function* onFetchGenresStart() {
  yield takeLatest(GenresActionTypes.FETCH_GENRES_START, fetchGenresAsync);
}

export function* onFetchExactGenreStart() {
  yield takeLatest(GenresActionTypes.FETCH_EXACT_GENRE_START, fetchExactGenreAsync);
}

export function* genresSaga() {
  yield all([
    call(onFetchGenresStart),
    call(onFetchExactGenreStart)
  ]);
}