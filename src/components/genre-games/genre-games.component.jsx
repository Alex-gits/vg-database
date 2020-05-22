import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './genre-games.styles.scss';

import { fetchGenreGamesStart } from '../../redux/all-games/all-games.actions';
import { fetchExactGenreStart } from '../../redux/genres/genres.actions';
import { selectGenreGamesCollection } from '../../redux/all-games/all-games.selectors';
import { selectExactGenre } from '../../redux/genres/genres.selectors';

import Spinner from '../spinner/spinner.component';
import GamePreviewItem from '../game-preview-item/game-preview-item.component';
import SectionHeader from '../section-header/section-header.component';

const GenreGames = ({ match, genre, fetchGenre, fetchGenreGames, genreGames }) => {
  useEffect(() => {
    fetchGenre(match.params.slug);
    fetchGenreGames(match.params.slug);
  }, [fetchGenre, fetchGenreGames, match.params.slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    genre && genreGames ? 
    <div>
      <div className='genre-info'>
        <SectionHeader className='genre-info__title'>{genre.name}</SectionHeader>
        <p className='genre-info__description' dangerouslySetInnerHTML={{ __html: genre.description }}></p>
      </div>
      <div className='genre-games'>
        {
          genreGames.map(game => <GamePreviewItem key={game.id} game={game} />)
        }
      </div>
    </div>
    : <Spinner />
  )
}

const mapStateToProps = createStructuredSelector({
  genre: selectExactGenre,
  genreGames: selectGenreGamesCollection
})

const mapDispatchToProps = dispatch => ({
  fetchGenre: slug => dispatch(fetchExactGenreStart(slug)),
  fetchGenreGames: slug => dispatch(fetchGenreGamesStart(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(GenreGames);