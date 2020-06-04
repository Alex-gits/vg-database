import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InfiniteScroll from 'react-infinite-scroll-component';

import './trending.styles.scss';

import { selectTrendingGames } from '../../redux/trending/trending.selectors';
import {
  fetchTrendingStart,
  fetchMoreTrendingStart,
  resetTrending
} from '../../redux/trending/trending.actions';

import GamePreviewItem from '../../components/game-preview-item/game-preview-item.component';
import SectionHeader from '../../components/section-header/section-header.component';
import Spinner from '../../components/spinner/spinner.component';

const TrendingGames = ({ trendingGames, fetchTrending, fetchMore, reset }) => {
  const [page, changePage] = useState(2);

  const fetchMoreGames = () => {
    changePage((page) => page + 1);
    return fetchMore(page);
  };

  useEffect(() => {
    fetchTrending();
    return () => reset();
  }, [fetchTrending, reset]);

  return (
    <div className='main-content'>
      <SectionHeader>Trending Games</SectionHeader>
      <InfiniteScroll
        style={{ overflow: 'hidden' }}
        dataLength={trendingGames.length}
        next={fetchMoreGames}
        hasMore={page < 4 ? true : false}
        loader={<Spinner />}>
        {trendingGames.map((game) => (
          <GamePreviewItem game={game} key={game.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  trendingGames: selectTrendingGames
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrending: () => dispatch(fetchTrendingStart()),
  fetchMore: (page) => dispatch(fetchMoreTrendingStart(page)),
  reset: () => dispatch(resetTrending())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGames);
