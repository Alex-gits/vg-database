import React from 'react';

import './game-information.styles.scss';

const GameInformation = ({ game, croppedPoster }) => (
  <div className='game-overview'>
    <div 
      className='game-overview__image-wrapper'
      style={{
        backgroundImage:  `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.5)), url(${croppedPoster})`
      }}
    >
      <div className='game-overview__title-wrapper'>
        <div>
          Platforms:
        </div>
        <h2 className='game-overview__title'>{game.name}</h2>
      </div>
    </div>
    <div className='game-overview__content'>
      <div className='game-overview__about'>
        <h4 className='game-overview__about-title'>About</h4> 
        <div className='game-overview__about-text' dangerouslySetInnerHTML={{ __html: game.description }}>
        </div>
      </div>
      <div className='game-overview__details'>
        <div className='game-overview__details-item'>
          <p>Platforms:</p> {game.platforms.map(platform => <span key={platform.platform.slug} className='game-overview__details-item'>{platform.platform.name}</span>)}
        </div>
        <div className='game-overview__details-item'>
          <p>Release date:</p> <span className='game-overview__details-item'>{game.released}</span>
        </div>
        <div className='game-overview__details-item'>
          <p>Publisher:</p> {game.publishers.map(publisher => <span key={publisher.slug} className='game-overview__details-item'>{publisher.name}</span>)}
        </div>
        <div className='game-overview__details-item'>
          <p>Genres:</p> {game.genres.map(gengre => <span key={gengre.slug} className='game-overview__details-item'>{gengre.name}</span>)}
        </div>
        <div className='game-overview__details-item'>
          <p>Developers:</p> {game.developers.map(developer => <span key={developer.slug} className='game-overview__details-item'>{developer.name}</span>)}
        </div>
        <div className='game-overview__details-item'>
          <p>Age rating:</p> 
          <span className='game-overview__details-item'>
            {game.esrb_rating ? game.esrb_rating.name : 'Not aged'}
          </span>
        </div>
        <div className='game-overview__details-item'>
          <p>Website:</p>
          <span className='game-overview__details-item'>
            {game.website ? <a href={game.website}>{game.website}</a> : 'Not added'}
          </span>
        </div>
        <div className='game-overview__details-item'>
          <p>Metascore:</p>
          <span className='game-overview__details-item metacritic'>
            {game.metacritic ? game.metacritic : 'TBA'}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default GameInformation;