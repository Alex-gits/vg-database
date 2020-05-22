import SearchActionTypes from './search.types';

export const fetchSearchResultsStart = query => ({
  type: SearchActionTypes.FETCH_SEARCH_START,
  payload: query
});

export const fetchSearchResultsSuccess = results => ({
  type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
  payload: results
});

export const fetchSearchResultsFailure = error => ({
  type: SearchActionTypes.FETCH_SEARCH_SUCCESS,
  payload: error
});