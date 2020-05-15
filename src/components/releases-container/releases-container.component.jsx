import React from 'react';
import { connect } from 'react-redux';

import './releases-container.styles.scss';

import { selectReleasesFetchingStatus, selectAllReleases } from '../../redux/releases/releases.selectors';

import Spinner from '../spinner/spinner.component';
import SectionHeader from '../section-header/section-header.component';
import GamePreviewItem from '../game-preview-item/game-preview-item.component';

const ReleasesContainer = ({ loading, releases, period }) => (
  <div className='releases'>
    <SectionHeader>
      {
        period === 'last-month'
        ? 'Last month releases'
        : period === 'last-week'
        ? 'Last week releases'
        : 'Next week releases'
      }
    </SectionHeader>
    <div className='releases__wrapper'>
      {        
        loading ? <Spinner /> : releases.map(game => <GamePreviewItem key={game.id} game={game} />)
      }
    </div>
  </div>
);

const mapStateToProps = (state, props) => ({
  releases: selectAllReleases(props.period)(state),
  loading: selectReleasesFetchingStatus(state)
});

export default connect(mapStateToProps)(ReleasesContainer);
