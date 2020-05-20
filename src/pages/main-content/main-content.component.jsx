import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import InfiniteScroll from 'react-infinite-scroll-component';

import './main-content.styles.scss';

import { selectTrendingGames } from '../../redux/trending/trending.selectors';
import { fetchTrendingStart } from '../../redux/trending/trending.actions';

import GamePreviewItem from '../../components/game-preview-item/game-preview-item.component';
import SectionHeader from '../../components/section-header/section-header.component';
import Spinner from '../../components/spinner/spinner.component';

const MainContent = ({ trendingGames, fetchTrending }) => {
  const [page, changePage] = useState(2);

  const fetchMoreGames = () => {
    changePage(page => page + 1);
    return fetchTrending(page);
  }

  useEffect(() => {
    fetchTrending(1);
  }, [fetchTrending]);

  return (
    <div className='main-content'>
      <SectionHeader>Trending Games</SectionHeader>
        <InfiniteScroll
          dataLength={trendingGames.length}
          next={fetchMoreGames}
          hasMore={page < 10 ? true : false}
          loader={<Spinner />}
          endMessage={<p style={{margin: '0 auto'}}>Thx for using the website!</p>}
        >
          {
            trendingGames.map(game => <GamePreviewItem game={game} key={game.id} />)
          }
        </InfiniteScroll>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  trendingGames: selectTrendingGames
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: page => dispatch(fetchTrendingStart(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);