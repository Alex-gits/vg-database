import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
  fetchAllGamesSuccess, 
  fetchAllGamesFailure,
  fetchGenreGamesSuccess,
  fetchGenreGamesFailure,
  fetchMoreGenreGamesSuccess,
  fetchMoreGenreGamesFailure,
  fetchMoreGamesSuccess,
  fetchMoreGamesFailure } from './all-games.actions';

import AllGamesActionTypes from './all-games.types';

export function* fetchAllGamesAsync() {
  try {
    const response = yield fetch('https://api.rawg.io/api/games?page_size=40');
    const allGames = yield response.json();

    yield put(fetchAllGamesSuccess(allGames.results));
  } catch (error) {
    yield put(fetchAllGamesFailure(error));
  }
}

export function* fetchMoreGamesAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games?page_size=40&page=${payload}`);
    const moreGames = yield response.json();

    yield put(fetchMoreGamesSuccess(moreGames.results));
  } catch (error) {
    yield put(fetchMoreGamesFailure(error));
  }
}

export function* fetchGenreGamesAsync({ payload }) {
  try {
    const response = yield fetch(`https://api.rawg.io/api/games?genres=${payload}&page_size=40`);
    const genreGames = yield response.json();

    yield put(fetchGenreGamesSuccess(genreGames.results));
  } catch (error) {
    yield put(fetchGenreGamesFailure(error));
  }
}

export function* fetchMoreGenreGamesAsync({ payload }) {
  try {
    console.log(payload)
    const response = yield fetch(`https://api.rawg.io/api/games?genres=${payload.genre}&page=${payload.page}&page_size=40`);
    const genreGames = yield response.json();

    yield put(fetchMoreGenreGamesSuccess(genreGames.results));
  } catch (error) {
    yield put(fetchMoreGenreGamesFailure(error));
  }
}

export function* onFetchAllGamesStart() {
  yield takeLatest(AllGamesActionTypes.FETCH_ALLGAMES_START, fetchAllGamesAsync);
}

export function* onFetchMoreGamesStart() {
  yield takeLatest(AllGamesActionTypes.FETCH_MORE_GAMES_START, fetchMoreGamesAsync);
}

export function* onFetchGenreGamesStart() {
  yield takeLatest(AllGamesActionTypes.FETCH_GENRE_GAMES_START, fetchGenreGamesAsync);
}

export function* onFetchMoreGenreGamesStart() {
  yield takeLatest(AllGamesActionTypes.FETCH_MORE_GENRE_GAMES_START, fetchMoreGenreGamesAsync);
}

export function* allGamesSagas() {
  yield all([
    call(onFetchAllGamesStart),
    call(onFetchGenreGamesStart),
    call(onFetchMoreGenreGamesStart),
    call(onFetchMoreGamesStart)
  ])
}