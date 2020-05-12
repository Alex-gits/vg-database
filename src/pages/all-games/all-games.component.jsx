import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './all-games.styles.scss';

import { selectAllGamesCollection, selectAllGamesFetchingStatus } from '../../redux/all-games/all-games.selectors';
import { fetchAllGamesStart } from '../../redux/all-games/all-games.actions';

import Spinner from '../../components/spinner/spinner.component';
import GamePreviewItem from '../../components/game-preview-item/game-preview-item.component';

const AllGamesPage = ({ allGames, fetchAllGamesStart, loading }) => {
  useEffect(() => {
    fetchAllGamesStart();
  }, [fetchAllGamesStart])

  return (
    <div className='all-games'>
      <h2 className='main-content__title'>All games</h2>
      <div className='all-games__wrapper'>
        {
          loading ? <Spinner /> : allGames.map(game => <GamePreviewItem game={game} key={game.id} />)
        }
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchAllGamesStart: () => dispatch(fetchAllGamesStart())
});

const mapStateToProps = createStructuredSelector({
  allGames: selectAllGamesCollection,
  loading: selectAllGamesFetchingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(AllGamesPage);