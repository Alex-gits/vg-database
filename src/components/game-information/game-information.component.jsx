import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'; 

import './game-information.styles.scss';

import SectionHeader from '../section-header/section-header.component';
import SimilarGames from '../similar-games/similar-games.component';

import { getCroppedImage, getPlatformIcon } from '../../utils/utils';

const GameInformation = ({ game, ytUrl, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='game-overview__overlay'>
      <div className='game-overview'>
        <div 
          className='game-overview__image-wrapper'
          style={{
            backgroundImage:  `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.3), rgba(21, 21, 21, 0.5)), url(${getCroppedImage(game.background_image, "crop/600/400/")})`
          }}
        >
          <div className='game-overview__title-wrapper'>
            <div className='game-overview__parent-platforms'>
              {game.parent_platforms.map(platform => <i key={platform.platform.slug} className={getPlatformIcon(platform.platform.name)}></i>)}
            </div>
            <SectionHeader>{game.name}</SectionHeader>
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
            <div className='game-overview__details-item game-overview__details-genres'>
              <p>Genres:</p> {game.genres.map(genre => (
                <span key={genre.slug} className='game-overview__details-item game-overview__genres' onClick={() => history.push(`/genres/${genre.slug}`)}>
                  {genre.name}
                </span>
              ))}
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
        <div>
        {
          ytUrl ?
          
          <div className='game-overview__video'>
            <iframe  className='game-overview__iframe'
              title={game.slug}
              src={`https://www.youtube.com/embed/${ytUrl}`} 
              frameBorder="0" 
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
          </div>
          : 
          null
        }
        </div>
      </div>
      <div>
        <SimilarGames />
      </div>
    </div>
  )
};

export default withRouter(GameInformation);