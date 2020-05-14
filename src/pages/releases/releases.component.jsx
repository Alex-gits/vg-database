import React from 'react';
import { Route } from 'react-router-dom';

import ReleasesContainer from '../../components/releases-container/releases-container.component';

const ReleasesPage = ({ match }) => (
  <div>
    <Route exact path={match.path} component={ReleasesContainer} />
    <Route exact path={`${match.path}/last-week`} component={ReleasesContainer} />
    <Route exact path={`${match.path}/next-week`} component={ReleasesContainer} />
  </div>
);

export default ReleasesPage;