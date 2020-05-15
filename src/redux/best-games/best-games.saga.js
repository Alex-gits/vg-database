import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
  fetchTopGamesSuccess,
  fetchTopOfTheYearSuccess,
  fetchTopOf2018Success,
  fetchBestGamesFailure} from './best-games.actions';

import BestGamesActionTypes from './best-games.types';

const apiUrl = 'https://api.rawg.io/api/games?ordering=-rating';

const options = {
  page_size_20: '&page_size=20',
  page_size_40: '&page_size=40',
  page: '&page=',
  dates: '&dates='
}

export function* fetchTopGamesAsync({ payload }) {
  try {
    if (payload === 'best-of-all-time') {
      const firstResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}1`);
      const firstPage = yield firstResponse.json();
  
      const secondResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}2`);
      const secondPage = yield secondResponse.json();
  
      const thirdResponse = yield fetch(`${apiUrl}${options.page_size_40}${options.page}3`);
      const thirdPage = yield thirdResponse.json();
  
      const combinedTop = yield [...firstPage.results, ...secondPage.results, ...thirdPage.results];
  
      const top100 = yield combinedTop.slice(0, 100);
  
      yield put(fetchTopGamesSuccess(top100));
    } else if (payload === 'best-of-the-year') {
      const response = yield fetch(`${apiUrl}${options.page_size_40}${options.dates}2019-01-01,2019-12-31`);
      const topOfTheYear = yield response.json();
  
      yield put(fetchTopOfTheYearSuccess(topOfTheYear.results));
    } else {
      const response = yield fetch(`${apiUrl}${options.page_size_40}${options.dates}2018-01-01,2018-12-31`);
      const topOf2018 = yield response.json();
  
      yield put(fetchTopOf2018Success(topOf2018.results));
    }
    
  } catch (error) {
    yield put(fetchBestGamesFailure(error));
  }
}

export function* onFetchBestGamesStart() {
  yield takeLatest(BestGamesActionTypes.FETCH_BEST_GAMES_START, fetchTopGamesAsync)
}

export function* bestGamesSagas() {
  yield all([
    call(onFetchBestGamesStart),
  ]);
}