import { combineReducers } from 'redux';

import trendingReducer from './trending/trending.reducer';
import allGamesReducer from './all-games/all-games.reducer';
import gameOverviewReducer from './game-overview/game-overview.reducer';

export default combineReducers({
  trending: trendingReducer,
  allGames: allGamesReducer,
  gameOverview: gameOverviewReducer
});