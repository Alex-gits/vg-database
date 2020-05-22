import SearchActionTypes from './search.types';

const INITIAL_STATE = {
  searchResults: [],
  loading: false,
  error: null
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.FETCH_SEARCH_START:
      return {
        ...state,
        loading: true
      }
    case SearchActionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
        error: null
      }
    case SearchActionTypes.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        searchResults: []
      }
    default: 
      return state;
  }
}

export default searchReducer;