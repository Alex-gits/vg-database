import React from 'react';
import { withRouter } from 'react-router-dom';

import './game-preview-item.styles.scss';

const GamePreviewItem = ({ game, history }) => {
  const genres = Object.values(game.genres);
  const gamePoster = game.background_image;
  const croppedPoster = gamePoster.slice(0, 28) + "crop/600/400/" + gamePoster.slice(28);

  const playVideo = e => {
    const videoWrapper = e.target.closest('.game-preview');
    const video = videoWrapper.querySelector('video');

    if (video === null) return;
    if (typeof video.src !== 'string') return;

    if (video.src.length >= 15) {
      video.play();
    } else {
      return;
    }
  }

  return (
    <div className='game-preview' onMouseOver={playVideo}>
      <div className='game-preview__content'>
        {
          game.clip ?
          
          <div className='game-preview__video'>
            <video className='test' src={game.clip.clip} playsInline muted loop></video>
          </div>
          : 
          <div className='game-preview__no-video'>
            <p>No Video Yet</p>
            <p>(´• ω •)</p>
          </div>
        }
        <div className='game-preview__image-container'>
          <div
            className='game-preview__image'
            style={{
              backgroundImage: `url(${croppedPoster})`
            }}
          ></div>
        </div>
      </div>
      <div className='game-preview__footer'>
        <p className='game-preview__name' onClick={() => history.push(`/games/${game.slug}`)}>{game.name}</p>
        <div className='game-preview__genre'>
          Genres:
          <div>
            {
              genres.map(genre => <span className='genre-item' key={genre.slug}>{genre.name}</span>)
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(GamePreviewItem);