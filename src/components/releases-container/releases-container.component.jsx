import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './releases-container.styles.scss';

import { 
  fetchLastMonthReleasesStart, 
  fetchLastWeekReleasesStart, 
  fetchNextWeekReleasesStart } from '../../redux/releases/releases.actions';

import { 
  selectLastMonthReleases, 
  selectReleasesFetchingStatus,
  selectNextWeekReleases,
  selectWeekReleases } from '../../redux/releases/releases.selectors';

import Spinner from '../spinner/spinner.component';
import SectionHeader from '../section-header/section-header.component';
import GamePreviewItem from '../game-preview-item/game-preview-item.component';

const ReleasesContainer = ({ loading, lastMonth, lastWeek, nextWeek, fetchLastMonth, fetchLastWeek, fetchNextWeek, match }) => {
  useEffect(() => {
    if (match.path === '/releases') fetchLastMonth();
    if (match.path === '/releases/last-week') fetchLastWeek();
    if (match.path === '/releases/next-week') fetchNextWeek();
  }, [fetchLastMonth, fetchLastWeek, fetchNextWeek, match.path]);

  return (
    <div className='releases'>
      <SectionHeader>
        {
          match.path === '/releases'
          ? 'Last month releases'
          : match.path === '/releases/last-week'
          ? 'Last week releases'
          : 'Next week releases'
        }
      </SectionHeader>
      <div className='releases__wrapper'>
        {        
          loading
          ? <Spinner />
          : match.path === '/releases'
          ? lastMonth.map(game => <GamePreviewItem key={game.id} game={game} />)
          : match.path === '/releases/last-week'
          ? lastWeek.map(game => <GamePreviewItem key={game.id} game={game} />)
          : nextWeek.map(game => <GamePreviewItem key={game.id} game={game} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectReleasesFetchingStatus,
  lastMonth: selectLastMonthReleases,
  lastWeek: selectWeekReleases,
  nextWeek: selectNextWeekReleases
});

const mapDispatchToProps = dispatch => ({
  fetchLastMonth: () => dispatch(fetchLastMonthReleasesStart()),
  fetchLastWeek: () => dispatch(fetchLastWeekReleasesStart()),
  fetchNextWeek: () => dispatch(fetchNextWeekReleasesStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReleasesContainer);
