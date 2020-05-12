import BestGamesActionTypes from './best-games.types';

const INITIAL_STATE = {
  top: [],
  topOfTheYear: [],
  top2018: [],
  loading: false,
  error: null
}

const bestGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BestGamesActionTypes.FETCH_TOP_GAMES_START:
    case BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_START:
    case BestGamesActionTypes.FETCH_TOP_OF_2018_START:
      return {
        ...state,
        loading: true
      }
    case BestGamesActionTypes.FETCH_TOP_GAMES_SUCCESS:
      return {
        ...state,
        top: action.payload,
        topOfTheYear: [],
        top2018: [],
        loading: false,
        error: null
      }
    case BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_SUCESS:
      return {
        ...state,
        topOfTheYear: action.payload,
        top: [],
        top2018: [],
        loading: false,
        error: null
      }
    case BestGamesActionTypes.FETCH_TOP_OF_2018_SUCESS:
      return {
        ...state,
        topOfTheYear: [],
        top: [],
        top2018: action.payload,
        loading: false,
        error: null
      }
    case BestGamesActionTypes.FETCH_TOP_GAMES_FAILURE:
    case BestGamesActionTypes.FETCH_TOP_OF_2018_FAILURE:
    case BestGamesActionTypes.FETCH_TOP_OF_THE_YEAR_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        topOfTheYear: [],
        top: [],
        top2018: []
      }
    default:
      return state;
  }
}

export default bestGamesReducer;