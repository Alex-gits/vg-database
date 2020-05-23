import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';
import GameInformation from '../../components/game-information/game-information.component';

import { selectGameOverview, selectYoutubeUrls } from '../../redux/game-overview/game-overview.selectors';
import { fetchGameStart, fetchSimilarGamesStart, fetchYoutubeUrlStart } from '../../redux/game-overview/game-overview.actions';

const GameOverviewPage = ({ match, fetchGameStart, game, fetchSimilarGames, fetchVideosUrls, ytUrls }) => {
  useEffect(() => {
    fetchGameStart(match.params.slug);
  }, [fetchGameStart, match.params.slug]);

  useEffect(() => {
    fetchSimilarGames(match.params.slug);
  }, [fetchSimilarGames, match.params.slug]);

  useEffect(() => {
    fetchVideosUrls(match.params.slug);
  }, [fetchVideosUrls, match.params.slug]);

  return game ? <GameInformation game={game} ytUrl={ytUrls.length ? ytUrls[1].external_id : null} /> : <Spinner />
}

const mapStateToProps = createStructuredSelector({
  game: selectGameOverview,
  ytUrls: selectYoutubeUrls
});

const mapDispatchToProps = dispatch => ({
  fetchGameStart: slug => dispatch(fetchGameStart(slug)),
  fetchSimilarGames: slug => dispatch(fetchSimilarGamesStart(slug)),
  fetchVideosUrls: slug => dispatch(fetchYoutubeUrlStart(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOverviewPage);