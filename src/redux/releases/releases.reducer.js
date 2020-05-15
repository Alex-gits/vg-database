import ReleasesActionTypes from './releases.types';

const INITIAL_STATE = {
  lastMonthCollection: [],
  lastWeekCollection: [],
  nextWeekCollection: [],
  error: null,
  loading: false
}

const releasesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReleasesActionTypes.FETCH_RELEASES_START:
      return {
        ...state,
        loading: true
      }
    case ReleasesActionTypes.FETCH_LAST_MONTH_SUCCESS:
      return {
        ...state,
        lastMonthCollection: action.payload,
        lastWeekCollection: [],
        nextWeekCollection: [],
        loading: false,
        error: null
      }
    case ReleasesActionTypes.FETCH_LAST_WEEK_SUCCESS:
      return {
        ...state,
        lastWeekCollection: action.payload,
        lastMonthCollection: [],
        nextWeekCollection: [],
        loading: false,
        error: null
      }
    case ReleasesActionTypes.FETCH_NEXT_WEEK_SUCCESS:
      return {
        ...state,
        lastWeekCollection: [],
        lastMonthCollection: [],
        nextWeekCollection: action.payload,
        loading: false,
        error: null
      }
    case ReleasesActionTypes.FETCH_RELEASES_FAILURE:
      return {
        ...state,
        error: action.payload,
        lastMonthCollection: [],
        lastWeekCollection: [],
        nextWeekCollection: [],
        loading: false
      }
    default:
      return state;
  }
}

export default releasesReducer;