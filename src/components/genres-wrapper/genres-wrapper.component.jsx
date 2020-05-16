import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectGenresCollection, selectGenresFetchingStatus } from '../../redux/genres/genres.selectors';
import { fetchGenresStart } from '../../redux/genres/genres.actions';

import GenrePreviewItem from '../genre-preview-item/genre-preview-item.component';
import Spinner from '../spinner/spinner.component';

import './genres-wrapper.styles.scss';

const GenresWrapper = ({ loading, genres, fetchGenreGames }) => {
  useEffect(() => {
    fetchGenreGames();
  }, [fetchGenreGames]);

  return (
    <div className='genres-container'>
      {
        loading ? <Spinner /> : genres.map(genre => <GenrePreviewItem key={genre.id} genre={genre} />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectGenresFetchingStatus,
  genres: selectGenresCollection
});

const mapDispatchToProps = dispatch => ({
  fetchGenreGames: () => dispatch(fetchGenresStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresWrapper);