import GameOverviewTypes from './game-overview.types';

const INITIAL_VALUE = {
  game: null,
  similarGames: [],
  ytUrls: [],
  loading: false,
  error: null
}

const gameOverviewReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case GameOverviewTypes.FETCH_SIMILAR_START:
    case GameOverviewTypes.FETCH_YOUTUBE_URL_START:
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
    case GameOverviewTypes.FETCH_SIMILAR_SUCCESS:
      return {
        ...state,
        similarGames: action.payload,
        loading: false,
        error: null
      }
    case GameOverviewTypes.FETCH_YOUTUBE_URL_SUCCESS:
      return {
        ...state,
        ytUrls: action.payload,
        loading: false,
        error: null
      }
    case GameOverviewTypes.FETCH_GAME_FAILURE:
    case GameOverviewTypes.FETCH_SIMILAR_FAILURE:
    case GameOverviewTypes.FETCH_YOUTUBE_URL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        game: null,
        similarGames: [],
        ytUrls: []
      }
    default:
      return state;
  }
}

export default gameOverviewReducer;