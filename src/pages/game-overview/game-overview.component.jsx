import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';
import GameInformation from '../../components/game-information/game-information.component';

import { selectGameOverview, selectGameOverviewStatus } from '../../redux/game-overview/game-overview.selectors';
import { fetchGameStart } from '../../redux/game-overview/game-overview.actions';

const GameOverviewPage = ({ match, fetchGameStart, game, loading }) => {
  useEffect(() => {
    fetchGameStart(match.params.slug);
  }, [fetchGameStart, match.params.slug]);

  const gamePoster = game ? game.background_image : null;
  const croppedPoster = game ? gamePoster.slice(0, 28) + "crop/600/400/" + gamePoster.slice(28) : null;

  return loading ? <Spinner /> : <GameInformation game={game} croppedPoster={croppedPoster} />
}

const mapStateToProps = createStructuredSelector({
  game: selectGameOverview,
  loading: selectGameOverviewStatus
});

const mapDispatchToProps = dispatch => ({
  fetchGameStart: slug => dispatch(fetchGameStart(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverviewPage);