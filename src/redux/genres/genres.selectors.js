import { createSelector } from 'reselect';

const selectGenres = state => state.genres;

export const selectGenresCollection = createSelector(
  [selectGenres],
  genres => genres.genresCollection ? genres.genresCollection : []
);

export const selectExactGenre = createSelector(
  [selectGenres],
  genres => genres.genre
);

export const selectGenresFetchingStatus = createSelector(
  [selectGenres],
  genres => genres.loading
)