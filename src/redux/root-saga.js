import { all, call } from 'redux-saga/effects';

import { trendingSagas } from './trending/trending.saga';
import { allGamesSagas } from './all-games/all-games.saga';
import { gameOverviewSaga } from './game-overview/game-overview.saga';
import { bestGamesSagas } from './best-games/best-games.saga';
import { releasesSagas } from './releases/releases.saga';
import { genresSaga } from './genres/genres.saga';

export default function* rootSaga() {
  yield all([
    call(trendingSagas),
    call(allGamesSagas),
    call(gameOverviewSaga),
    call(bestGamesSagas),
    call(releasesSagas),
    call(genresSaga)
  ])
}