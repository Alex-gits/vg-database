import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ReleasesContainer from '../../components/releases-container/releases-container.component';
import { fetchReleasesStart } from '../../redux/releases/releases.actions';

const ReleasesPage = ({ match, fetchReleases }) => {
  useEffect(() => {
    fetchReleases(match.params.period);
  }, [fetchReleases, match.params.period]);

  return (
    <div>
      <ReleasesContainer period={match.params.period} />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchReleases: period => dispatch(fetchReleasesStart(period))
});

export default connect(null, mapDispatchToProps)(ReleasesPage);