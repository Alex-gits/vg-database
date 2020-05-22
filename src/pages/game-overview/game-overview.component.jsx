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


  const gamePoster = game ? game.background_image : null;
  const croppedPoster = game ? gamePoster.slice(0, 28) + "crop/600/400/" + gamePoster.slice(28) : null;

  return game && ytUrls.length ? <GameInformation game={game} ytUrl={ytUrls[1].external_id} croppedPoster={croppedPoster} /> : <Spinner />
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