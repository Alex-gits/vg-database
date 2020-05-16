import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './content.styles.scss';

import MainContent from '../../pages/main-content/main-content.component';
import AllGamesPage from '../../pages/all-games/all-games.component';
import GameOverviewPage from '../../pages/game-overview/game-overview.component';
import TopGames from '../../pages/top-games/top-games.component';
import ReleasesPage from '../../pages/releases/releases.component';
import GenresPage from '../../pages/genres/genres.component';

const Content = () => (
  <div className='content'>
    <Switch>
      <Route exact path='/' component={MainContent} />
      <Route exact path='/games' component={AllGamesPage} />
      <Route path='/games/:slug' component={GameOverviewPage} />
      <Route path='/top/:time' component={TopGames} />
      <Route path='/releases/:period' component={ReleasesPage} />
      <Route path='/genres' component={GenresPage} />
    </Switch>
  </div>
);

export default Content;
