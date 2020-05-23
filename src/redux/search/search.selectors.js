import { createSelector } from 'reselect';

const searchGames = state => state.search;

export const selectSearchResults = createSelector(
  [searchGames],
  search => search.searchResults ? search.searchResults : []
);

export const selectSearchResultsLength = createSelector(
  [searchGames],
  search => search.searchResults.length
);

export const selectSearchFetchingStatus = createSelector(
  [searchGames],
  search => search.loading
);