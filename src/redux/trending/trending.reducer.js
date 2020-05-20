import TrendingActionTypes from './trending.types';

const INITIAL_STATE = {
  trendingGames: [],
  loading: false,
  error: null
}

const trendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrendingActionTypes.FETCH_TRENDING_START:
      return {
        ...state,
        loading: true
      }
    case TrendingActionTypes.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        trendingGames: [...state.trendingGames, ...action.payload],
        loading: false,
        error: null
      }
    case TrendingActionTypes.FETCH_TRENDING_FAILURE:
      return {
        ...state,
        error: action.payload,
        trendingGames: [],
        loading: false
      }
    default:
      return state;
  }
}

export default trendingReducer;