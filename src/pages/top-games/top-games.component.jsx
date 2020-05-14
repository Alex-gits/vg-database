import React from 'react';
import { Route } from 'react-router-dom';

import TopList from '../../components/top-list/top-list.component';

const TopGames = ({ match }) => (
  <div className='top-games'>
    <Route exact path={`${match.path}`} component={TopList} />
    <Route exact path={`${match.path}/top-of-the-year`} component={TopList} />
    <Route exact path={`${match.path}/2018`} component={TopList} />
  </div>
);

export default TopGames;