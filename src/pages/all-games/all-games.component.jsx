import React, { useState, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import './all-games.styles.scss';

import { selectAllGamesCollection, selectAllGamesFetchingStatus } from '../../redux/all-games/all-games.selectors';
import { fetchAllGamesStart, fetchMoreGamesStart, resetGames } from '../../redux/all-games/all-games.actions';

import Spinner from '../../components/spinner/spinner.component';
import GamePreviewItem from '../../components/game-preview-item/game-preview-item.component';
import SectionHeader from '../../components/section-header/section-header.component';
import PlatformSelector from '../../components/platfrom-selector/platform-selector.component';

const AllGamesPage = ({ allGames, fetchAllGamesStart, fetchMore, reset }) => {
  const [page, changePage] = useState(2);
  const [platform, changePlatform] = useState(0);

  const fetchMoreGames = () => {
    changePage(page => page + 1);
    return fetchMore({page, platform});
  }

  useEffect(() => {
    fetchAllGamesStart(platform);
    return () => reset();
  }, [fetchAllGamesStart, reset, platform]);

  return (
    <div className='all-games'>
      <SectionHeader>All games</SectionHeader>
      <PlatformSelector changePlatform={changePlatform} type={platform} />
      <div className='all-games__wrapper'>
        <InfiniteScroll
          className='all-games__infinity-scroll'
          style={{overflow: 'hidden'}}
          dataLength={allGames.length}
          next={fetchMoreGames}
          hasMore={page < 60 ? true : false}
          loader={<Spinner />}
        >
          {
            allGames.map(game => <GamePreviewItem game={game} key={game.id} />)
          }
        </InfiniteScroll>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchAllGamesStart: platform => dispatch(fetchAllGamesStart(platform)),
  fetchMore: page => dispatch(fetchMoreGamesStart(page)),
  reset: () => dispatch(resetGames())
});

const mapStateToProps = createStructuredSelector({
  allGames: selectAllGamesCollection,
  loading: selectAllGamesFetchingStatus
});

export default connect(mapStateToProps, mapDispatchToProps)(AllGamesPage);