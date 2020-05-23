import TrendingActionTypes from './trending.types';
import { combineArrays } from '../../utils/utils';

const INITIAL_STATE = {
  trendingGames: [],
  loading: false,
  error: null
}

const trendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrendingActionTypes.FETCH_TRENDING_START:
    case TrendingActionTypes.FETCH_MORE_TRENDING_START:
      return {
        ...state,
        loading: true
      }
    case TrendingActionTypes.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        trendingGames: action.payload,
        loading: false,
        error: null
      }
    case TrendingActionTypes.FETCH_MORE_TRENDING_SUCCESS:
      return {
        ...state,
        trendingGames: combineArrays(state.trendingGames, action.payload),
        loading: false,
        error: null
      }
    case TrendingActionTypes.FETCH_TRENDING_FAILURE:
    case TrendingActionTypes.FETCH_MORE_TRENDING_FAILURE:
      return {
        ...state,
        error: action.payload,
        trendingGames: [],
        loading: false
      }
    case TrendingActionTypes.RESET_TRENDING:
      return {
        ...state,
        trendingGames: [],
        loading: false
      }
    default:
      return state;
  }
}

export default trendingReducer;