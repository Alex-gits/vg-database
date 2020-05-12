import GameOverviewTypes from './game-overview.types';

const INITIAL_VALUE = {
  game: null,
  loading: true,
  error: null
}

const gameOverviewReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GameOverviewTypes.FETCH_GAME_START:
      return {
        ...state,
        loading: true
      }
    case GameOverviewTypes.FETCH_GAME_SUCCESS:
      return {
        ...state,
        game: action.payload,
        loading: false,
        error: null
      }
    case GameOverviewTypes.FETCH_GAME_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        game: null,
      }
    default:
      return state;
  }
}

export default gameOverviewReducer;