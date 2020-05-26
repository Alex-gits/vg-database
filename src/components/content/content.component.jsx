import React, {lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

import './content.styles.scss';
import Spinner from '../spinner/spinner.component';


const MainContent = lazy(() => import('../../pages/main-content/main-content.component'));
const AllGamesPage = lazy(() => import('../../pages/all-games/all-games.component'));
const GameOverviewPage = lazy(() => import('../../pages/game-overview/game-overview.component'));
const TopGames = lazy(() => import('../../pages/top-games/top-games.component'));
const ReleasesPage = lazy(() => import('../../pages/releases/releases.component'));
const GenresPage = lazy(() => import('../../pages/genres/genres.component'));



const Content = () => (
  <div className='content'>
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={MainContent} />
        <Route exact path='/games' component={AllGamesPage} />
        <Route path='/games/:slug' component={GameOverviewPage} />
        <Route path='/top/:time' component={TopGames} />
        <Route path='/releases/:period' component={ReleasesPage} />
        <Route path='/genres' component={GenresPage} />
      </Suspense>
    </Switch>
  </div>
);

export default Content;
