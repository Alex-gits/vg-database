import React from 'react';
import { Route } from 'react-router-dom';


import GenresWrapper from '../../components/genres-wrapper/genres-wrapper.component';
import GenreGames from '../../components/genre-games/genre-games.component';

const GenresPage = ({ match }) => (
  <div className='genres'>
    <Route exact path={match.path} component={GenresWrapper} />
    <Route exact path={`${match.path}/:slug`} component={GenreGames} />
  </div>
)

export default GenresPage;