import React from 'react';
import { withRouter } from 'react-router-dom';

import './top-list-item.styles.scss';

const TopListItem = ({ game, index, history }) => {
  return (
    <div className='top-game__wrapper'>
      <p className='top-game__name'>
        <span className='top-game__position'>{index + 1 + '.'}</span>
        <span className='top-game__title' onClick={() => history.push(`/games/${game.slug}`)}>{game.name}</span>
        <span className='top-game__score'>{game.rating}</span>
      </p>
      <div className='top-game__info-container'>
        <span className='top-game__info'>Platforms: </span> 
        <span>{game.parent_platforms.filter((platform, index) => index < 3).map(platform => `${platform.platform.name} `)}</span>
      </div>
    </div>
  )
};

export default withRouter(TopListItem);