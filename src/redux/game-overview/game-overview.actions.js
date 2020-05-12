import GameOverviewTypes from './game-overview.types';

export const fetchGameStart = slug => ({
  type: GameOverviewTypes.FETCH_GAME_START,
  payload: slug
});

export const fetchGameSuccess = game => ({
  type: GameOverviewTypes.FETCH_GAME_SUCCESS,
  payload: game
});

export const fetchGameFailure = error => ({
  type: GameOverviewTypes.FETCH_GAME_FAILURE,
  payload: error
});