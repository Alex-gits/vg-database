import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './main-content.styles.scss';

import { selectTrendingGames, selectTrendingGamesStatus } from '../../redux/trending/trending.selectors';

import GamePreviewItem from '../../components/game-preview-item/game-preview-item.component';
import SectionHeader from '../../components/section-header/section-header.component';
import Spinner from '../../components/spinner/spinner.component';

const MainContent = ({ trendingGames, loading }) => (
  <div className='main-content'>
    <SectionHeader>Trending Games</SectionHeader>
    <div className='game-preview__wrapper'>
      {
        loading ? <Spinner /> : trendingGames.map(game => <GamePreviewItem game={game} key={game.id} />)
      }
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  trendingGames: selectTrendingGames,
  loading: selectTrendingGamesStatus
});

export default connect(mapStateToProps)(MainContent);