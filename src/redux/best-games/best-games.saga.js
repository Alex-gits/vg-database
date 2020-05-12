import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
  fetchTopGamesSuccess, 
  fetchTopGamesFailure, 
  fetchTopOfTheYearSuccess, 
  fetchTopOfTheYearFailure,
  fetchTopOf2018Success,
  fetchTopOf2018Failure } from './best-games.actions';

import BestGamesActionTypes from './best-games.types';

const apiUrl = 'https://api.rawg.io/api/games?ordering=-rating';

const options = {
  page_size_20: '&page_size=20',
  page_size_40: '&page_size=40',
  page: '&page=',
  dates: '&dates='
}

export function* fetchTopGamesAsync() {
  try {
    const firstResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}1`);
    const firstPage = yield firstResponse.json();

    const secondResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}2`);
    const secondPage = yield secondResponse.json();

    const thirdResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}3`);
    const thirdPage = yield thirdResponse.json();

    const combinedTop = yield [...firstPage.results, ...secondPage.results, ...thirdPage.results];

    const top100 = yield combinedTop.slice(0, 100);

    yield put(fetchTopGamesSuccess(top100));
  } catch (error) {
    yield put(fetchTopGamesFailure(error));
  }
}

export function* fetchTopOfTheYearAsync() {
  try {
    const response = yield fetch(`${apiUrl}${options.page_size_40}${options.dates}2019-01-01,2019-12-31`);
    const topOfTheYear = yield response.json();

    yield put(fetchTopOfTheYearSuccess(topOfTheYear.results));
  } catch (error) {
    yield put(fetchTopOfTheYearFailure(error));
  }
}

export function* fetchTopOf2018Async() {
  try {
    const response = yield fetch(`${apiUrl}${options.page_size_40}${options.dates}2018-01-01,2018-12-31`);
    const topOf2018 = yield response.json();

    yield put(fetchTopOf2018Success(topOf2018.results));
  } catch (error) {
    yield put(fetchTopOf2018Failure(error));
  }
}

export function* onFetchTopGamesStart() {
  yield takeLatest(BestGamesActionTypes.FETCH_TOP_GAMES_START, fetchTopGamesAsync)
}

export function* onFetchTopGamesOfTheYearStart() {
  yield takeLatest(BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_START, fetchTopOfTheYearAsync)
}

export function* onFetchTopGamesOf2018Start() {
  yield takeLatest(BestGamesActionTypes.FETCH_TOP_OF_2018_START, fetchTopOf2018Async)
}

export function* bestGamesSagas() {
  yield all([
    call(onFetchTopGamesStart),
    call(onFetchTopGamesOfTheYearStart),
    call(onFetchTopGamesOf2018Start)
  ]);
}