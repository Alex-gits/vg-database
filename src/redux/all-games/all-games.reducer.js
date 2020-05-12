import AllGamesActionTypes from './all-games.types';

const INITIAL_STATE = {
  allGamesCollection: [],
  loading: false,
  error: null
}

const allGamesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AllGamesActionTypes.FETCH_ALLGAMES_START:
      return {
        ...state,
        loading: true
      }
    case AllGamesActionTypes.FETCH_ALLGAMES_SUCCESS:
      return {
        ...state,
        allGamesCollection: action.payload,
        loading: false,
        error: null
      }
    case AllGamesActionTypes.FETCH_ALLGAMES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        allGamesCollection: null
      }
    default:
      return state;
  }
}

export default allGamesReducer;