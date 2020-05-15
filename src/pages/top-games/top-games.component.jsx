import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TopList from '../../components/top-list/top-list.component';

import { fetchBestGamesStart } from '../../redux/best-games/best-games.actions';

const TopGames = ({ match, fetchBestGames }) => {
  useEffect(() => {
    fetchBestGames(match.params.time);
  }, [fetchBestGames, match.params.time]);

  return (
    <div className='top-games'>
      <TopList time={match.params.time} />
    </div>
  )
};

const mapDispathToProps = dispatch => ({
  fetchBestGames: years => dispatch(fetchBestGamesStart(years))
});

export default connect(null, mapDispathToProps)(TopGames);