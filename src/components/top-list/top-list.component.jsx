import React from 'react';
import { connect } from 'react-redux';

import './top-list.styles.scss';

import TopListItem from '../top-list-item/top-list-item.component';
import Spinner from '../spinner/spinner.component';
import SectionHeader from '../section-header/section-header.component';

import { selectTopGames, selectBestGamesFetchingStatus } from '../../redux/best-games/best-games.selectors';

const TopList = ({ bestGames, loading, time }) => (
  <div className='top-list'>
    <div className='top-list__image-wrapper'>
      <div className='top-list__title-wrapper'>
        <SectionHeader bottoms={true} >
          {
            time === 'best-of-all-time'
            ? 'Top games of all Time'
            : time === 'best-of-the-year'
            ? 'Top games of the last Year'
            : 'Top games of 2018'
          }
        </SectionHeader>
      </div>
    </div>
    <div>
      {
        loading ? <Spinner /> : bestGames.map((game, index) => <TopListItem key={game.id} game={game} index={index} />)
      }
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  bestGames: selectTopGames(props.time)(state),
  loading: selectBestGamesFetchingStatus(state)
})

export default connect(mapStateToProps)(TopList);