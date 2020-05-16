import React from 'react';
import { withRouter } from 'react-router-dom';

import './genre-preview-item.styles.scss';

const GenrePreviewItem = ({ genre, match, history }) => {
  const genrePoster = genre.image_background;
  const croppedPoster = genrePoster ? genrePoster.slice(0, 28) + "resize/640/-/" + genrePoster.slice(28) : 'https://optica-nadin.ru/static/img/no-img.png';

  return (
    <div 
    className='genre-item__wrapper'
    style={{
      backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%), url(${croppedPoster})`
    }}
    >
      <div className='genre-item__content'>
        <h3 className='genre-item__title'>
          {genre.name}
        </h3>
        <button onClick={() => history.push(`${match.path}/${genre.slug}`)} className='genre-item__button'>Explore</button>
        <p className='genre-item__count'>Games count: <span>{genre.games_count}</span></p>
      </div>
    </div>
  )
} 

export default withRouter(GenrePreviewItem);