import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './similar-games.styles.scss';

import { selectSimilarGames } from '../../redux/game-overview/game-overview.selectors';
import GamePreviewItem from '../game-preview-item/game-preview-item.component';

const SimilarGames = ({ similarGames }) => {

  return (
    <div className='similar-games'>
      <p className='similar-games__title'>Similar Games</p>
      {
        similarGames ? similarGames.map(game => <GamePreviewItem key={game.id} game={game} />) : null
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  similarGames: selectSimilarGames
});

export default connect(mapStateToProps)(SimilarGames);